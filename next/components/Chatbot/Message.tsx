import {Group, Text, Sx, Image, Box} from '@mantine/core'

import {ReactElement} from 'react'
import {MenuItem} from '../Menu'

import menu from '../../lib/menu.preval'

interface MessageProps {
	children: React.ReactNode,
	align: 'left' | 'right',
	sx?: Sx
}

function Message({children, align, sx}: MessageProps) {
	return (
		<Group position={align}>
			<Text
				p={15}
				mx={15}
				mb={10}
				sx={sx}
			>
				{children}
			</Text>
		</Group>
	)
}

export function UserMessage({text}: {text: string}) {
	return (
		<Message
			align='right'
			sx={(theme) => ({backgroundColor: theme.colors.orange[2]})}
		>
			{text}
		</Message>
	)
}

function BotMessageBody({index, text, image}: {index?: number, text?: string, image?: string}) {
	if (image) {
		return <Image src={image} />
	}
	if (text && text.startsWith('!')) {
		const [command, arg1] = text.slice(1).split(' ')
		if (command === 'recommendation') {
			const item = Object.values(menu.itemsById)[25]
			return (
				<>
					<Text mb={8}>This week I recommend you try our {item.fields.name}!</Text>
					<Box>
						<MenuItem flat item={item} />
					</Box>
				</>
			)
		}
		if (command === 'recommend') {
			const tagIds = menu.sectionOrTagToIds[arg1]
			const idChoice = tagIds[index % tagIds.length]
			const item = menu.itemsById[idChoice]

			return (
				<>
					<Text mb={8}>Let me find some {arg1} options for you. How about our {item.fields.name}?</Text>
					<Box>
						<MenuItem flat item={item} />
					</Box>
				</>
			)
		}
		if (command === 'checkout') {
			return (
				<Text>If you are ready to checkout, just click the checkout button in the basket on the menu page!</Text>
			)
		}
	}
	return <Text>{text}</Text>
}

export function BotMessage(message: {index?: number, body?: ReactElement, text?: string, image?: string}) {
	return (
		<Message
			align='left'
			sx={(theme) => ({backgroundColor: theme.colors.orange[4]})}
		>
			{message.body ?? <BotMessageBody {...message} />}
		</Message>
	)
}
