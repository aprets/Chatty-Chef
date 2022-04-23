import {Button} from '@mantine/core'
import {HeaderMiddle} from './_MantineNavbar'

export default function Navbar() {
	return (
		<HeaderMiddle
			links={[
				{label: 'Home', link: '/'},
				{label: '?', link: '/example-cow-page'},
				{label: 'Menu', link: '/menu'},
			]}
			cta={(
				<Button radius='xl' sx={{height: 30}}>
					Help me choose!
				</Button>
			)}
		/>
	)
}
