import React, {useState} from 'react'
import {TextInput, Box, Button, Grid} from '@mantine/core'

import {IoMdSend} from 'react-icons/io'

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
				<Grid>
					<Grid.Col span={10}>
						<TextInput
							radius='xl'
							type='text'
							onChange={handleInputChange}
							value={text}
							placeholder='Enter your message here'
						/>
					</Grid.Col>
					<Grid.Col span={2}>
						<Button radius='xl' type='submit'> <IoMdSend /> </Button>
					</Grid.Col>
				</Grid>

			</form>
		</Box>
	)
}
