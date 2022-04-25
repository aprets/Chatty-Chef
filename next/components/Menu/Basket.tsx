import {Button, Card, Group, Title, Text} from '@mantine/core'
import menu from '../../lib/menu.preval'
import {useStore} from '../../lib/store'

interface Product {
	name: string,
	price: number,
	quantity: number,
}

export function Basket() {
	const basketItems = useStore((store) => store.basketItems)
	const addToBasket = useStore((store) => store.addToBasket)
	const removeFromBasket = useStore((store) => store.removeFromBasket)
	const clearBasket = useStore((store) => store.clearBasket)
	return (
		<Card shadow='sm' p='lg' sx={{position: 'sticky', top: 80, zIndex: 1}}>
			<Group position='apart' mb={16}>
				<Title order={3}>Basket</Title>
				<Button radius='xl' compact disabled={basketItems.isEmpty()} onClick={clearBasket}>×</Button>
			</Group>
			{basketItems.entrySeq().map(([id, count]) => (
				<Group position='apart' key={id} mb={8}>
					<Text>{menu.itemsById[id].fields.name}</Text>
					<Group>
						<Group spacing={8}>
							<Button radius='xl' compact onClick={() => { removeFromBasket(id) }}>
								-
							</Button>
							<Text>{count}</Text>
							<Button radius='xl' compact onClick={() => { addToBasket(id) }}>
								+
							</Button>
						</Group>

						<Text>£{(menu.itemsById[id].fields.price * count).toFixed(2)}</Text>
					</Group>

				</Group>
			))}
			{basketItems.isEmpty() ? (
				<Text size='sm' color='grey' sx={{textAlign: 'center'}}>
					Your basket is empty
				</Text>

			) : (
				<Group position='apart'>
					<Text weight={500}>Total</Text>
					<Text weight={500}>
						£{basketItems.entrySeq().reduce((acc, [id, count]) => acc + menu.itemsById[id].fields.price * count, 0).toFixed(2)}
					</Text>
				</Group>

			)}

			<Button
				fullWidth
				mt={14}
				disabled={basketItems.isEmpty()}
				onClick={async () => {
					const products: Product[] = basketItems.entrySeq().toArray().map(([id, count]) => {
						const item = menu.itemsById[id]
						return {
							name: item.fields.name,
							price: item.fields.price,
							quantity: count,
						}
					})
					const response = await fetch(process.env.NEXT_PUBLIC_CHECKOUT_URL, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(products),
					})
					clearBasket()
					window.location.href = await response.text()
				}}
			>
				Checkout
			</Button>
		</Card>
	)
}
