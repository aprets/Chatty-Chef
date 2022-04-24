import {SiCodechef} from 'react-icons/si'
import {Affix, Button} from '@mantine/core'
import ChatBotWindow from './ChatBotWindow'

export default function ChatBotPopup(
	{isOpened, setOpened}: {isOpened: boolean, setOpened: (boolean) => void},
) {
	return (
		<div>
			<Affix position={{bottom: 20, right: 20}}>
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
				) }
			</Affix>
		</div>

	)
}
