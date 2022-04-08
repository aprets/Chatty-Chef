import * as React from 'react'
import Popover from '@mui/material/Popover'
import Fab from '@mui/material/Fab'
import {FaJenkins} from 'react-icons/fa'
import Window from './Window'

const style = {color: 'black', fontSize: '1.5em'}
export default function BasicPopover() {
	const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const open = Boolean(anchorEl)
	const id = open ? 'simple-popover' : undefined
	return (
		<div>
			<Fab
				onClick={handleClick}
				sx={{
					position: 'fixed',
					bottom: (theme) => theme.spacing(2),
					right: (theme) => theme.spacing(2),
				}}
				color='primary'
			>
				<FaJenkins style={style} />
			</Fab>

			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
			><Window />
			</Popover>
		</div>

	)
}
