import {AppProps} from 'next/app'
import Head from 'next/head'
import {MantineProvider} from '@mantine/core'
import Navbar from '../components/Navbar'
import ChatBot from '../Chatbot/Chatbot'

export default function App(props: AppProps) {
	const {Component, pageProps} = props

	return (
		<>
			<Head>
				<title>🍔 EPIC FOOD</title>
				<meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
			</Head>

			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				theme={{
					/** Put your mantine theme override here */
					colorScheme: 'light',
				}}
			>
				<Navbar />
				<ChatBot />
				<Component {...pageProps} />
			</MantineProvider>
		</>
	)
}
