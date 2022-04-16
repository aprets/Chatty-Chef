import {Button} from '@mantine/core'
import {HeaderMiddle} from './_MantineNavbar'

export default function Navbar({helpMeChooseCallback}: {helpMeChooseCallback: VoidFunction}) {
	return (
		<HeaderMiddle
			links={[
				{label: 'Home', link: '/'},
				{label: '?', link: '/example-cow-page'},
				{label: 'Menu', link: '/menu-page'},
			]}
			cta={(
				<Button radius='xl' sx={{height: 30}} onClick={helpMeChooseCallback}>
					Help me choose!
				</Button>
			)}
		/>
	)
}
