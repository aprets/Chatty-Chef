import {SiCodechef} from 'react-icons/si'
import {Affix, Button} from '@mantine/core'
import {useRouter} from 'next/router'
import ChatBotWindow from './ChatBotWindow'

export default function ChatBotPopup(
	{isOpened, setOpened}: {isOpened: boolean, setOpened: (boolean) => void},
) {
	const {pathname} = useRouter()
	const shouldShow = pathname !== '/admin'
	return (
		shouldShow ? (
			<Affix position={{bottom: 10, right: 10}}>
				{isOpened ? (
					<ChatBotWindow close={() => { setOpened(false) }} />
				) : (
					<Button
						radius='xl'
						size='xl'
						onClick={() => setOpened((o) => !o)}
					>
						<SiCodechef color='black' size='40' />
					</Button>
				)}
			</Affix>
		) : false
	)
}
