import {Button} from '@mantine/core'
import {HeaderMiddle} from './_MantineNavbar'

export default function Navbar({helpMeChooseCallback}: {helpMeChooseCallback: VoidFunction}) {
	return (
		<HeaderMiddle
			links={[
				{label: 'Home', link: '/'},
				{label: 'Menu', link: '/menu'},
				{label: 'About Us', link: '/about-us'},
			]}
			cta={(
				<Button radius='xl' sx={{height: 30}} onClick={helpMeChooseCallback}>
					Help me!
				</Button>
			)}
		/>
	)
}
