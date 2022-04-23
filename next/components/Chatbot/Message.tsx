import {Group, Text, Sx} from '@mantine/core'

interface MessageProps {
	children: React.ReactNode,
	align: 'left' | 'right',
	sx?: Sx
}

function Message({children, align, sx}: MessageProps) {
	return (
		<Group position={align}>
			<Text
				// color='white'
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

export function UserMessage({children}: {children: string}) {
	return (
		<Message
			align='right'
			sx={(theme) => ({backgroundColor: theme.colors.orange[2]})}
		>{children}
		</Message>
	)
}

export function BotMessage({children}: {children: string}) {
	return (
		<Message
			align='left'
			sx={(theme) => ({backgroundColor: theme.colors.orange[4]})}
		>{children}
		</Message>
	)
}
