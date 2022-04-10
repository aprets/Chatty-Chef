import {Text, Image, Button, Card} from '@mantine/core'

export interface MenuItemProps {
	name: string,
	description?: string
	price: number,
	calories: number,
	pictureUrl?: string,
	pictureAlt?: string,
}

export function MenuItem({name, description, price, calories, pictureUrl, pictureAlt}: MenuItemProps) {
	return (
		<Card shadow='sm' style={{display: 'flex', flexDirection: 'column'}}>
			<Card.Section>
				<Image src={pictureUrl} alt='Norway' />
			</Card.Section>
			<Text mt={10} weight={500}>{name}</Text>
			<Text mt={10} size='sm' style={{flexGrow: 1}}>{description}</Text>
			<Text
				mt={10}
				size='xs'
				weight={500}
				styles={(theme) => ({root: {color: theme.colors.contrast[9]}})}
			>
				{Array.from({length: 5}, () => 'Chicken').join(' · ')}
			</Text>
			<Text mt={10} weight={600}>£{price}</Text>

			<Button fullWidth style={{marginTop: 14}}>
				Add
			</Button>
		</Card>
	)
}
