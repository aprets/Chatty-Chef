import React from 'react'

export default function UserMessage({text}) {
	return (
		<div
			className='message-container'
			style={{
				width: '100%',
			}}
		>
			<div
				className='user-message'
				style={{
					float: 'right',
					padding: '10px 15px',
					margin: '10px',
					background: '#f2e8ae',
				}}
			>{text}
			</div>
		</div>
	)
}
