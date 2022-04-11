import {Text, Image, Button, Card, Title} from '@mantine/core'

export interface MenuItemProps {
	name: string,
	description?: string
	price: number,
	pictureUrl?: string,
	pictureAlt?: string,
	tags: string[],
}

export function MenuItem({name, description, price, pictureUrl, pictureAlt, tags}: MenuItemProps) {
	return (
		<Card shadow='sm' sx={{display: 'flex', flexDirection: 'column'}}>
			<Card.Section>
				<Image src={pictureUrl} alt={pictureAlt} />
			</Card.Section>
			<Title order={4} mt={20}>{name}</Title>
			<Text mt={10} size='sm' sx={{flexGrow: 1}}>{description}</Text>
			<Text
				mt={10}
				mb={5}
				size='sm'
				weight={500}
				sx={(theme) => ({color: theme.colors.contrast[9]})}
			>
				{Array.from(tags, (t) => t).join(' · ')}
			</Text>
			<Text mt={10} weight={600}>£{price}</Text>

			<Button fullWidth sx={{marginTop: 14}}>
				Add
			</Button>
		</Card>
	)
}
