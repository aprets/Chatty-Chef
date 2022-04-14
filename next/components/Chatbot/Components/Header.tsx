import React from 'react'
import {Box} from '@mantine/core'

export default function Header() {
	return (
		<Box
			className='header'
			sx={(theme) => ({
				fontWeight: 'bold',
				background: '#ffa733',
				textAlign: 'center',
				padding: '20px',
				borderRadius: theme.radius.md,
			})}
		> Chatty Chef
		</Box>
	)
}
