import React, {useState, useEffect} from 'react'

import {Box, Button, Card, Text, Title, Group} from '@mantine/core'
import {BotMessage, UserMessage} from './Message'
import Input from './Input'

interface Message {
	sender: 'user' | 'bot',
	text?: string,
	picture?: string,
}

export default function ChatBotWindow({close}: {close: VoidFunction}) {
	const [isLoading, setIsLoading] = useState(false)

	const [messages, setMessages] = useState<Message[]>([
		{sender: 'bot', text: 'Hello I am the Chatty Chef, how could I help you?'},
	])

	const send = async (text) => {
		setMessages((messagesState) => [...messagesState, {sender: 'user', text}])
		setIsLoading(true)
		const rawBotResponse = await fetch(process.env.NEXT_PUBLIC_CHATBOT_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				sender: 'bob',
				message: text,
			}),
		})
		const botResponse = await rawBotResponse.json()
		const botMessages = botResponse.map((botMessage) => ({
			sender: 'bot',
			text: botMessage.text,
			image: botMessage.image,
		}))
		setMessages((messagesState) => [...messagesState, ...botMessages])
		setIsLoading(false)
	}

	return (
		<Box
			sx={{width: 400}}
		>
			<Card withBorder shadow='lg'>
				<Card.Section>
					<Box
						p={20}
						sx={(theme) => ({
							// background: theme.primaryColor,
							textAlign: 'center',
						})}
					>
						<Group position='apart' mb={16}>
							<Title order={3}>Chatty Chef</Title>
							<Button radius='xl' compact size='md' onClick={close}>×</Button>
						</Group>
					</Box>
				</Card.Section>
				{/* <Header /> */}
				<Box
					sx={(theme) => ({
						height: '500px',
						width: '100%',
						overflow: 'auto',
						padding: '15px',
						borderRadius: theme.radius.md,

					})}
				>
					{messages.map((message) => {
						const MessageComponent = message.sender === 'bot' ? BotMessage : UserMessage
						return (
							<MessageComponent text={message.text} image={message.image} />
						)
					})}
					{isLoading && (
						<BotMessage text='...' />
					)}
				</Box>
				<Input onSend={send} />
			</Card>
		</Box>
	)
}
