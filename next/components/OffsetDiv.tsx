export function OffsetDiv({id, offset}: {id: string, offset?: string | number}) {
	const offsetAmount = offset ?? -60
	return (
		<div
			id={id}
			style={{
				position: 'absolute',
				left: 'auto',
				top: 'auto',
				right: 'auto',
				bottom: 'auto',
				backgroundColor: 'red',
				marginTop: offsetAmount,
			}}
		/>
	)
}
