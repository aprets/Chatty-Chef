import {useRouter} from 'next/router'
import {doc, getFirestore} from 'firebase/firestore'
import {useDocumentData} from 'react-firebase-hooks/firestore'
import {Alert, Box, Card, Center, Container, Group, Loader, SimpleGrid, Stepper, Text, Title} from '@mantine/core'
import {RiMoneyPoundCircleFill} from 'react-icons/ri'
import {GrNotes} from 'react-icons/gr'
import {GiCook, GiDeliveryDrone} from 'react-icons/gi'
import {IoFastFoodSharp} from 'react-icons/io5'
import {ReactNode} from 'react'
import {Order} from '../lib/types/ordering'

function StatusText({children}: {children: ReactNode}) {
	return (
		<Alert color='orange' mt={16} radius='xl'>
			<Text size='xl' sx={{textAlign: 'center'}}>
				{children}
			</Text>
		</Alert>
	)
}

export default function Tracking() {
	const router = useRouter()
	const orderId = router.query?.order
	const db = getFirestore()
	const [untypedOrder, loading, error] = useDocumentData(doc(db, 'orders', (orderId ?? 'undefined').toString()))
	const order = untypedOrder as Order
	if (loading) {
		return (
			<Center mt={24}>
				<Loader size='xl' />
			</Center>
		)
	}
	if (error || !order) {
		return (
			<Center mt={24}>
				<Alert title='Error' color='red'>
					{error ? error.message : 'Invalid order id'}
				</Alert>
			</Center>
		)
	}

	return (
		<Container size='xl'>
			<Card shadow='sm' p='lg' mt='xl' withBorder>
				<Stepper active={order.status} breakpoint='sm' my='xl'>
					<Stepper.Step label='Payment' icon={<RiMoneyPoundCircleFill size={25} />}>
						<StatusText>
							We are currently processing your payment
						</StatusText>
					</Stepper.Step>
					<Stepper.Step label='Order Accepted' icon={<GrNotes size={25} />}>
						<StatusText>
							Your order has been accepted! <br /> Our chefs will start cooking it soon.
						</StatusText>
					</Stepper.Step>
					<Stepper.Step label='Preparing Order' icon={<GiCook size={25} />}>
						<StatusText>
							Our chefs are cooking your order!
						</StatusText>
					</Stepper.Step>
					<Stepper.Step label='Out For Delivery' icon={<GiDeliveryDrone size={25} />}>
						<StatusText>
							Your order is out for delivery! <br /> It will be with you soon.
						</StatusText>
					</Stepper.Step>
					<Stepper.Step label='Delivered' icon={<IoFastFoodSharp size={25} />}>
						<StatusText>
							Bon Appétit
						</StatusText>
					</Stepper.Step>
				</Stepper>

				{order.status > 0 && (
					<SimpleGrid
						cols={2}
						spacing='xl'
						breakpoints={[
							{maxWidth: 600, cols: 1, spacing: 'sm'},
						]}
					>
						<Box>
							<Title order={4} mb={8}>Your Order</Title>
							{order.items.map((item) => (
								<Group position='apart' key={item.name} mb={8}>
									<Text>{item.name}</Text>
									<Group>
										<Text>{item.quantity}x</Text>
										<Text>£{(item.price * item.quantity).toFixed(2)}</Text>
									</Group>

								</Group>
							))}
							<Group position='apart'>
								<Text weight={500}>Total</Text>
								<Text weight={500}>
									£{order.items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
								</Text>
							</Group>
						</Box>
						<Box>
							<Title order={4}>Delivering to</Title>
							<Text mt={8}>{order.address}</Text>
						</Box>
					</SimpleGrid>
				)}
			</Card>
		</Container>
	)
}
