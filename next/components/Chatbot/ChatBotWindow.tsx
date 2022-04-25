import React, {useState, useEffect} from 'react'

import {Box, Button, Card, Text, Title, Group, Loader} from '@mantine/core'
import {BotMessage, UserMessage} from './Message'
import Input from './Input'
import {useStore} from '../../lib/store'

export default function ChatBotWindow({close}: {close: VoidFunction}) {
	const [isLoading, setIsLoading] = useState(false)

	const uuid = useStore((store) => store.uuid)
	const chatMessages = useStore((store) => store.chatMessages)
	const addChatMessages = useStore((store) => store.addChatMessages)

	const send = async (text) => {
		addChatMessages([{sender: 'user', text}])
		setIsLoading(true)
		const rawBotResponse = await fetch(process.env.NEXT_PUBLIC_CHATBOT_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				sender: uuid,
				message: text,
			}),
		})
		const botResponse = await rawBotResponse.json()
		const botMessages = botResponse.map((botMessage) => ({
			sender: 'bot',
			text: botMessage.text,
			image: botMessage.image,
		}))
		addChatMessages(botMessages)
		setIsLoading(false)
	}

	return (
		<Box
			sx={{maxWidth: 400}}
		>
			<Card withBorder shadow='lg'>
				<Card.Section>
					<Box
						p={20}
						sx={{
							textAlign: 'center',
						}}
					>
						<Group position='apart' mb={16}>
							<Title order={3}>Chatty Chef</Title>
							<Button radius='xl' compact size='md' onClick={close}>×</Button>
						</Group>
					</Box>
				</Card.Section>
				<Box sx={{overflow: 'auto', height: '500px', display: 'flex', flexDirection: 'column-reverse'}}>
					<Box>
						{chatMessages.map((message, index) => {
							if (message.sender === 'bot') {
								return <BotMessage key={index} index={index} text={message.text} image={message.image} />
							}
							return <UserMessage key={index} text={message.text} />
						})}
						{isLoading && (
							<BotMessage body={<Loader variant='dots' color='dark' size='xs' />} />
						)}
					</Box>
				</Box>
				<Input onSend={send} />
			</Card>
		</Box>
	)
}
