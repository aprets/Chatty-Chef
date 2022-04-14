import * as React from 'react'
import {useState} from 'react'
import {FaJenkins} from 'react-icons/fa'
import {Popover, Affix, Button} from '@mantine/core'
import Window from './Window'

export default function BasicPopover() {
	const [opened, setOpened] = useState(false)
	return (
		<div>
			<Affix position={{bottom: 20, right: 20}}>
				<Popover
					opened={opened}
					onClose={() => setOpened(false)}
					target={(
						<Button
							radius='xl'
							size='md'
							onClick={() => setOpened((o) => !o)}
						><FaJenkins style={{color: 'black'}} />
						</Button>
					)}
					withArrow
					radius='xl'
				><Window />
				</Popover>
			</Affix>
		</div>

	)
}
