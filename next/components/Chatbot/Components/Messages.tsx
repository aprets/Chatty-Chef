import React, {useEffect, useRef} from 'react'
import {Box} from '@mantine/core'

export default function Messages({messages}) {
	const el = useRef(null)
	useEffect(() => {
		el.current.scrollIntoView({block: 'end', behavior: 'smooth'})
	})
	return (
		<Box
			className='messages'
			sx={(theme) => ({
				height: '500px',
				width: '100%',
				overflow: 'auto',
				padding: '15px',
				borderRadius: theme.radius.md,

			})}
		>
			{messages}
			<Box id='el' ref={el} />
		</Box>
	)
}
