import {region} from 'firebase-functions'
import {createClient as createContentfulClient} from 'contentful'
import {IMenuPageTypeFields} from './contentful'
import Stripe from 'stripe'
import {initializeApp} from 'firebase-admin/app'
import {getFirestore} from 'firebase-admin/firestore'
import Cors from 'cors'
const corsHandler = Cors({origin: true})


initializeApp()

const regionalHttps = region('europe-west2').https


const makeCMSClient = () => createContentfulClient({
	space: process.env.CONTENTFUL_SPACE_ID as string,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
})


type UsableItem = {
	id: string,
	name: string,
	description: string,
	price: number,
	tags: string[]
}

export const menu = regionalHttps.onRequest(async (request, response) => {
	const rawMenu = await makeCMSClient().getEntry<IMenuPageTypeFields>('6VQHxmppQNVstAALdIVBlX', {include: 3})
	const sections = rawMenu.fields.menuSections.filter((s) => s.fields).map((s) => s.fields)
	const items: UsableItem[] = []
	for (const section of sections) {
		for (const {fields, metadata, sys} of section.items.filter((i) => i.fields)) {
			items.push({
				id: sys.id,
				name: fields.name,
				description: fields.description || '',
				price: fields.price,
				tags: [section.virtualTagName, ...metadata.tags.map((t) => t.sys.id.slice(7))],
			})
		}
	}
	response.status(200).json(items)
})

const makeStripeClient = () => new Stripe(process.env.STRIPE_SECRET_TOKEN, {apiVersion: '2020-08-27'})
interface Product {
	name: string,
	price: number,
	quantity: number
}

export const checkout = regionalHttps.onRequest(async (request, response) => {
	corsHandler(request, response, async () => {
		const products: Product[] = request.body

		const stripe = makeStripeClient()
		const session = await stripe.checkout.sessions.create({
			shipping_address_collection: {
				allowed_countries: ['GB'],
			},
			shipping_options: [
				{
					shipping_rate_data: {
						type: 'fixed_amount',
						fixed_amount: {
							amount: 0,
							currency: 'GBP',
						},
						display_name: 'Free delivery',
						delivery_estimate: {
							minimum: {
								unit: 'hour',
								value: 1,
							},
							maximum: {
								unit: 'hour',
								value: 1,
							},
						},
					},
				},
			],
			line_items: products.map(product => ({
				price_data: {
					currency: 'gbp',
					product_data: {
						name: product.name,
					},
					unit_amount: Math.floor(product.price * 100),
				},
				quantity: product.quantity,
			})),
			mode: 'payment',
			success_url: 'https://chatty-chef.web.app/tracking?order={CHECKOUT_SESSION_ID}',
			cancel_url: 'https://chatty-chef.web.app/menu',
		})

		const db = getFirestore()

		db.collection('orders').doc(session.id).set({
			status: 0,
		})

		response.send(session.url)
	})
})

interface Order {
	status: 0 | 1 | 2 | 3,
	address: string,
	items: {
		name: string,
		quantity: number,
		price: number
	}[],
	placed: Date,
}

export const orderHook = regionalHttps.onRequest(async (request, response) => {

	const stripe = makeStripeClient()

	const payload = request.rawBody
	const sig = request.headers['stripe-signature']
	let event

	try {
		event = stripe.webhooks.constructEvent(payload, sig, process.env.STRIPE_WEBHOOK_ENDPOINT_SECRET)
	} catch (err) {
		console.error(err.message)
		response.status(400).send(`Webhook Error: ${err.message}`)
	}

	const session: Stripe.Checkout.Session = event.data.object
	const lineItems = (await stripe.checkout.sessions.listLineItems(event.data.object.id)).data

	const db = getFirestore()

	const order: Order = {
		status: 1,
		items: lineItems.map(li => ({
			name: li.description,
			price: parseFloat((li.price.unit_amount / 100).toFixed(2)),
			quantity: li.quantity,
		})),
		address: `${session.shipping.address.line1}${session.shipping.address.line2 ? `, ${session.shipping.address.line2}` : ''}, ${session.shipping.address.postal_code}`,
		placed: new Date(),
	}

	db.collection('orders').doc(session.id).set(order)

	response.json(event)
})