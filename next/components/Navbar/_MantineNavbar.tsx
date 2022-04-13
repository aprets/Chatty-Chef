import {createStyles, Header, Group, Stack, Container, Burger} from '@mantine/core'
import {useBooleanToggle} from '@mantine/hooks'
import Link from 'next/link'
import {MantineLogo} from './MantineLogo'

const useStyles = createStyles((theme) => ({
	inner: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 56,

		[theme.fn.smallerThan('sm')]: {
			justifyContent: 'flex-start',
		},
	},

	links: {
		width: 260,

		[theme.fn.smallerThan('sm')]: {
			display: 'none',
		},
	},

	social: {
		width: 260,

		[theme.fn.smallerThan('sm')]: {
			width: 'auto',
			marginLeft: 'auto',
		},
	},

	burger: {
		marginRight: theme.spacing.md,

		[theme.fn.largerThan('sm')]: {
			display: 'none',
		},
	},

	link: {
		display: 'block',
		lineHeight: 1,
		padding: '8px 12px',
		borderRadius: theme.radius.sm,
		textDecoration: 'none',
		color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
		fontSize: theme.fontSizes.sm,
		fontWeight: 500,

		'&:hover': {
			backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
		},
	},

}))

interface HeaderMiddleProps {
	links: {link: string; label: string}[],
	cta: React.ReactNode
}

export function HeaderMiddle({links, cta}: HeaderMiddleProps) {
	const [opened, toggleOpened] = useBooleanToggle(false)
	const {classes, cx} = useStyles()

	const items = links.map((link) => (
		<Link
			key={link.label}
			href={link.link}
		>
			<a
				href={link.link}
				className={cx(classes.link)}
			>
				{link.label}
			</a>
		</Link>
	))

	return (
		<>
			<Header height={56}>
				<Container className={classes.inner}>
					<Burger
						opened={opened}
						onClick={() => toggleOpened()}
						size='sm'
						className={classes.burger}
					/>
					<Group className={classes.links} spacing={5}>
						{items}
					</Group>

					<MantineLogo />

					<Group spacing={16} className={classes.social} position='right' noWrap>
						{cta}
					</Group>
				</Container>
			</Header>
			{opened && (
				<Stack p='xs'>
					{items}
				</Stack>
			)}
		</>
	)
}
