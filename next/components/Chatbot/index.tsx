import {FaJenkins} from 'react-icons/fa'
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
						size='md'
						onClick={() => setOpened((o) => !o)}
					><FaJenkins style={{color: 'black'}} />
					</Button>
				) }
			</Affix>
		</div>

	)
}
