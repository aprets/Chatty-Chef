import {region} from 'firebase-functions'
import {createClient as createContentfulClient} from 'contentful'
import {IMenuPageTypeFields} from './contentful'

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
