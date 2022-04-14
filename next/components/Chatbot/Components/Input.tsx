import React, {useState} from 'react'
import {TextInput, Box} from '@mantine/core'

export default function Input({onSend}) {
	const [text, setText] = useState('')

	const handleInputChange = (e) => {
		setText(e.target.value)
	}

	const handleSend = (e) => {
		e.preventDefault()
		onSend(text)
		setText('')
	}

	return (
		<Box
			className='input'
			style={{
				position: 'relative',
			}}
		>
			<form onSubmit={handleSend}>
				<TextInput
					radius='xl'
					type='text'
					onChange={handleInputChange}
					value={text}
					placeholder='Enter your message here'
					style={{
						border: '0',
						opacity: '1',
						outline: 'none',
						padding: '16px 10px 16px 10px',
						width: '100%',
					}}
				/>
			</form>
		</Box>
	)
}
