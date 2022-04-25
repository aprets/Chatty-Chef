import {Paper, Group, Button} from '@mantine/core'
import {useMediaQuery} from '@mantine/hooks'
import {useEffect, useMemo, useState} from 'react'

export function SectionNavbar({sectionNames}: {sectionNames: string[]}) {
	const touchMediaQuery = useMediaQuery('(pointer: coarse)')
	const [isTouch, setIsTouch] = useState(false)
	useEffect(() => {
		setIsTouch(touchMediaQuery)
	}, [touchMediaQuery])
	return (
		<Paper shadow='sm' radius={0} sx={{position: 'sticky', top: 0, zIndex: 1}}>
			<Group
				spacing='xs'
				p='sm'
				noWrap={isTouch}
				sx={isTouch ? {overflowX: 'auto'} : {}}
				position={isTouch ? 'left' : 'center'}
				className='hide-scrollbars'
			>
				{
					sectionNames.map((name) => (
						<Button key={name} radius='xl' size='xs' type='button' variant='light' component='a' href={`#section-${name}`}>{name}</Button>
					))
				}
			</Group>
		</Paper>
	)
}
