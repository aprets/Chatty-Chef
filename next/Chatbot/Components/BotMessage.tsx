import React, {useState, useEffect} from 'react'

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
		<div
			className='message-container'
			style={{
				width: '100%',
			}}
		>
			<div
				className='bot-message'
				style={{
					float: 'left',
					padding: '10px 10px',
					margin: '5px',
					color: 'black',
				}}
			>{isLoading ? '...' : message}
			</div>
		</div>
	)
}
