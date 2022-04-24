import {Group, Text, Sx, Image} from '@mantine/core'

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

export function BotMessage({text, image}: {text?: string, image?: string}) {
	return (
		<Message
			align='left'
			sx={(theme) => ({backgroundColor: theme.colors.orange[4]})}
		>
			{image ? (
				<Image src={image} />
			) : (
				text
			)}
		</Message>
	)
}
