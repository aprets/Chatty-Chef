import {Affix, Button, Card, Container, Grid, Group, Input, SimpleGrid, Text, Title, Badge} from '@mantine/core'
import {useEffect, useRef, useState} from 'react'
import {getAuth, signInWithEmailAndPassword, signOut, User} from 'firebase/auth'
import {showNotification} from '@mantine/notifications'
import {useCollection} from 'react-firebase-hooks/firestore'
import {collection, doc, getFirestore, query, where, updateDoc, increment} from 'firebase/firestore'
import {Order} from '../lib/types/ordering'

const statusMessages = [
	'Processing Payment',
	'Accepted',
	'Cooking',
	'Out for delivery',
	'Delivered',
]

export default function Admin() {
	const [user, setUser] = useState<User>()
	const auth = getAuth()
	useEffect(() => {
		auth.onAuthStateChanged((firebaseUser) => {
			setUser(firebaseUser)
		})
	}, [auth])
	const inputRef = useRef<HTMLInputElement>()
	const db = getFirestore()
	const [ordersSnapshot, loading, error] = useCollection(query(collection(db, user ? 'orders' : 'undefined'), where('status', '<', 4)))
	const orders = ordersSnapshot?.docs.map((s) => {
		const data = s.data() as Order
		return {
			...data,
			placed: data.placed?.toDate(),
			id: s.id,
		}
	})
	const login = () => {
		const password = inputRef.current?.value
		signInWithEmailAndPassword(auth, process.env.NEXT_PUBLIC_ADMIN_EMAIL, password)
			.catch((authError) => {
				showNotification({
					color: 'red',
					title: 'Error',
					message: authError.code,
				})
			})
	}
	// eslint-disable-next-line react/no-unstable-nested-components
	function OrderManager() {
		return (
			<SimpleGrid
				cols={4}
				spacing='lg'
				breakpoints={[
					{maxWidth: 980, cols: 3, spacing: 'md'},
					{maxWidth: 755, cols: 2, spacing: 'sm'},
					{maxWidth: 600, cols: 1, spacing: 'sm'},
				]}
			>
				{orders.map((order) => (
					<Card shadow='sm' p='lg' mt='xl' withBorder>
						<Group position='apart'>
							<Title order={5}>{order.id.slice(60).toUpperCase()}</Title>
							<Badge
								size='lg'
								color={
									['gray', 'orange', 'green', 'violet'][order.status]
								}
							>{statusMessages[order.status]}
							</Badge>
						</Group>
						{order.status > 0 && (
							<>
								<Text weight={500} size='lg' my={8}>Placed {order.placed.toISOString().slice(11, 16)}</Text>
								<Text weight={500} size='lg' my={8}>Order</Text>
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
									<Text>Total</Text>
									<Text>
										£{order.items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
									</Text>
								</Group>
								<Text weight={500} size='lg' my={8}>Address</Text>
								<Text mt={8}>{order.address}</Text>
								<Group position='apart' mt={24}>
									<Button
										color='gray'
										disabled={order.status === 1}
										onClick={() => {
											updateDoc(doc(db, 'orders', order.id), {
												status: increment(-1),
											})
										}}
									>
										Revert to {statusMessages[order.status - 1]}
									</Button>
									<Button
										color='orange'
										onClick={() => {
											updateDoc(doc(db, 'orders', order.id), {
												status: increment(1),
											})
										}}
									>
										Move to {statusMessages[order.status + 1]}
									</Button>
								</Group>
							</>

						)}

					</Card>
				))}
			</SimpleGrid>
		)
	}
	return (
		<Container size={1920} mt='xl'>
			{user ? (
				<>
					<Affix position={{top: 10, right: 20}}>
						<Button radius='xl' color='red' onClick={() => { signOut(auth) }}>Logout</Button>
					</Affix>
					{error && <Text color='red'>{error.message}</Text>}
					{loading ? <Text sx={{textAlign: 'center'}}>Loading...</Text> : !error && <OrderManager />}
				</>
			) : (
				<Grid>
					<Grid.Col span={10}>
						<Input
							ref={inputRef}
							type='password'
							placeholder='Restaurant Password'
							radius='xl'
							onKeyDown={(event) => {
								if (event.key === 'Enter') login()
							}}
						/>
					</Grid.Col>
					<Grid.Col span={2}>
						<Button radius='xl' fullWidth onClick={login}>Enter</Button>
					</Grid.Col>
				</Grid>
			)}

		</Container>
	)
}
