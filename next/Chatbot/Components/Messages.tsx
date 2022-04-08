import React, {useEffect, useRef} from 'react'

export default function Messages({messages}) {
	const el = useRef(null)
	useEffect(() => {
		el.current.scrollIntoView({block: 'end', behavior: 'smooth'})
	})
	return (
		<div
			className='messages'
			style={{
				height: '500px',
				width: '100%',
				overflow: 'auto',
				padding: '10px',

			}}
		>
			{messages}
			<div id='el' ref={el} />
		</div>
	)
}
