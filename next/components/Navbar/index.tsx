import {Button} from '@mantine/core'
import {HeaderMiddle} from './_MantineNavbar'

export default function Navbar() {
	return (
		<HeaderMiddle
			links={[
				{label: 'Home', link: '/'},
				{label: 'MOMHI', link: '/t'},
			]}
			cta={(
				<>
					<Button radius='xl' sx={{height: 30}}>
						Get early access
					</Button>

					<Button radius='xl' sx={{height: 30}}>
						asd
					</Button>
				</>
			)}
		/>
	)
}
