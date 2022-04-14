import React, {useState, useEffect} from 'react'
import {Box} from '@mantine/core'

export default function BotMessage({fetchMessage}) {
	const [isLoading, setLoading] = useState(true)
	const [message, setMessage] = useState('')

	useEffect(() => {
		async function loadMessage() {
			const msg = await fetchMessage()
			setLoading(false)
			setMessage(msg)
		}
		loadMessage()
	}, [fetchMessage])

	return (
		<Box
			className='message-container'
			style={{
				width: '100%',
			}}
		>
			<Box
				className='bot-message'
				sx={(theme) => ({
					backgroundColor: 'orange',
					float: 'left',
					padding: '10px 10px',
					margin: '5px',
					color: 'black',
					borderRadius: theme.radius.md,
				})}
			>{isLoading ? '...' : message}

			</Box>
		</Box>
	)
}
