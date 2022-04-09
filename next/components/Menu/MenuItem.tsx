import {Text, Paper, Title, Image, Button, SimpleGrid} from '@mantine/core'

export interface MenuItemProps {
	name: string,
	description?: string
	price: number,
	calories: number,
	pictureUrl?: string,
	pictureAlt?: string,
}

export default function MenuItem({name, description, price, calories, pictureUrl, pictureAlt}: MenuItemProps) {
	return (
		<Paper shadow='sm' p='lg'>
			<SimpleGrid cols={1}>
				<Title order={4}>{name}</Title>
				<Image
					radius='md'
					src={pictureUrl}
					alt={pictureAlt}
				/>
				<Text lineClamp={2} color='gray'>{description}</Text>
				<Text color='gray'>{calories}</Text>
				<Text weight={600}>£{price}</Text>
				<Button color='orange' size='md'>
					Add
				</Button>
			</SimpleGrid>
		</Paper>
	)
}
