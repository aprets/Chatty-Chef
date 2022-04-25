import {Text, Image, Button, Card, Title, Box} from '@mantine/core'
import {NextLink} from '@mantine/next'
import {showNotification} from '@mantine/notifications'
import {useRouter} from 'next/router'
import {AiOutlineExclamation} from 'react-icons/ai'
import {useStore} from '../../lib/store'
import {IMenuItemType} from '../../lib/types/generated/contentful'

export interface MenuItemProps {
	name: string,
	description?: string
	price: number,
	pictureUrl?: string,
	pictureAlt?: string,
	tags?: string[],
	flat: boolean,
	onClick?: VoidFunction
}

export function RawMenuItem({name, description, price, pictureUrl, pictureAlt, tags, flat, onClick}: MenuItemProps) {
	return (
		<Card shadow='sm' withBorder={!flat} sx={{display: 'flex', flexDirection: 'column'}}>
			<Card.Section>
				<Image src={pictureUrl} alt={pictureAlt} />
			</Card.Section>
			<Title order={4} mt={20}>{name}</Title>
			{description && (
				<Text mt={10} size='sm'>{description}</Text>
			)}
			<Box sx={{flexGrow: 1}} />
			{tags?.length > 0 && (
				<Text
					mt={10}
					mb={5}
					size='sm'
					weight={500}
					sx={(theme) => ({color: theme.colors.contrast[9]})}
				>
					{Array.from(tags, (t) => t).join(' · ')}
				</Text>
			)}
			<Text mt={10} weight={600}>£{price.toFixed(2)}</Text>

			<Button fullWidth sx={{marginTop: 14}} onClick={onClick}>
				Add
			</Button>
		</Card>
	)
}

const camelToTitleCase = (camelCase) => camelCase
	.replace(/([A-Z])/g, (match) => ` ${match}`)
	.replace(/^./, (match) => match.toUpperCase())
	.trim()

export function MenuItem({item, flat}: {item: IMenuItemType, flat?: boolean}) {
	const {name, price, description, picture} = item?.fields ?? {}
	const {pathname} = useRouter()
	const isMenu = pathname === '/menu'
	const addToBasket = useStore((store) => store.addToBasket)
	const addItem = (id: string) => {
		if (!isMenu) {
			showNotification({
				icon: <AiOutlineExclamation />,
				message: <Text>We added {name} to your basket. <NextLink href='/menu'>Click here to view it on the menu page.</NextLink></Text>,
			})
		}
		addToBasket(id)
	}
	return (
		<RawMenuItem
			{...{name, price, description}}
			pictureUrl={picture?.fields?.file?.url}
			pictureAlt={picture?.fields?.title}
			tags={item.metadata.tags.map((t) => camelToTitleCase(t.sys.id.slice(7)))}
			flat={flat}
			onClick={() => { addItem(item.sys.id) }}
		/>
	)
}
