import {AppProps} from 'next/app'
import Head from 'next/head'
import {MantineProvider} from '@mantine/core'
import Navbar from '../components/Navbar'
import {theme} from '../lib/theme'

import '../global.css'

import ChatBot from '../components/Chatbot/Chatbot'

export default function App(props: AppProps) {
	const {Component, pageProps} = props

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
				<Navbar />
				<ChatBot />
				<Component {...pageProps} />
			</MantineProvider>
		</>
	)
}
