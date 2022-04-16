import {AppProps} from 'next/app'
import Head from 'next/head'
import {MantineProvider} from '@mantine/core'
import {useState} from 'react'
import Navbar from '../components/Navbar'
import {theme} from '../lib/theme'

import '../global.css'

import ChatBotPopup from '../components/Chatbot'

export default function App(props: AppProps) {
	const {Component, pageProps} = props

	const [chatbotPopupOpened, setChatbotPopupOpened] = useState(false)

	return (
		<>
			<Head>
				<title>🥘 Chatty Chef 🍔</title>
				<meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
			</Head>

			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				theme={theme}
			>
				<Navbar helpMeChooseCallback={() => { setChatbotPopupOpened(true) }} />
				<Component {...pageProps} />
				<ChatBotPopup isOpened={chatbotPopupOpened} setOpened={setChatbotPopupOpened} />
			</MantineProvider>
		</>
	)
}
