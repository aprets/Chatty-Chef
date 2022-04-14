import React, {useState, useEffect} from 'react'

import Messages from './Components/Messages'
import BotMessage from './Components/BotMessage'
import Input from './Components/Input'
import UserMessage from './Components/UserMessage'

import Api from './Api'

import Header from './Components/Header'

function Window() {
	const [messages, setMessages] = useState([])

	useEffect(() => {
		async function loadWelcomeMessage() {
			setMessages([
				<BotMessage
					key='0'
					fetchMessage={async () => Api.GetChatbotResponse('hi')}
				/>,
			])
		}
		loadWelcomeMessage()
	}, [])

	const send = async (text) => {
		const newMessages = messages.concat(
			<UserMessage key={messages.length + 1} text={text} />,
			<BotMessage
				key={messages.length + 2}
				fetchMessage={async () => Api.GetChatbotResponse(text)}
			/>,
		)
		setMessages(newMessages)
	}

	return (
		<div
			className='chatbot'
			style={{
				background: '#f5f8fb',
				width: '300px',
			}}
		>
			<Header />
			<Messages messages={messages} />
			<Input onSend={send} />
		</div>
	)
}

export default Window
