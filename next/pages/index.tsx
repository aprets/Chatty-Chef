import {Title, Text, Anchor, Timeline, Container, Stepper} from '@mantine/core'
import Chatbot from '../components/Chatbot/Chatbot'

export default function HomePage() {
	return (
		<>
			<Title sx={{fontSize: 100, fontWeight: 900, letterSpacing: -2}} align='center' mt={100}>
				Welcome to{' '}
				<Text inherit variant='gradient' component='span'>
					Chatty Chef
				</Text>
			</Title>
			<Text color='dimmed' align='center' size='lg' sx={{maxWidth: 580}} mx='auto' mt='xl'>
				If you wanna eat something ask Jenkins!{' '}
				<Anchor href='https://mantine.dev/theming/next/' size='lg'>
					He is waiting for you at the bottom right.
				</Anchor>
			</Text>
			<Container mt='xl'>
				<Timeline active={1} bulletSize={24} lineWidth={2}>
					<Timeline.Item title='New branch'>
						<Text color='dimmed' size='sm'>You&apos;ve created new branch <Text variant='link' component='span' inherit>fix-notifications</Text> from master</Text>
						<Text size='xs' style={{marginTop: 4}}>2 hours ago</Text>
					</Timeline.Item>

					<Timeline.Item title='Commits'>
						<Text color='dimmed' size='sm'>You&apos;ve pushed 23 commits to <Text variant='link' component='span' inherit>fix-notifications branch</Text></Text>
						<Text size='xs' style={{marginTop: 4}}>52 minutes ago</Text>
					</Timeline.Item>

					<Timeline.Item title='Pull request' lineVariant='dashed'>
						<Text color='dimmed' size='sm'>You&apos;ve submitted a pull request<Text variant='link' component='span' inherit>Fix incorrect notification message (#187)</Text></Text>
						<Text size='xs' style={{marginTop: 4}}>34 minutes ago</Text>
					</Timeline.Item>

					<Timeline.Item title='Code review'>
						<Text color='dimmed' size='sm'><Text variant='link' component='span' inherit>Robert Gluesticker</Text> left a code review on your pull request</Text>
						<Text size='xs' style={{marginTop: 4}}>12 minutes ago</Text>
					</Timeline.Item>
				</Timeline>
				<Stepper active={1} breakpoint='sm' mt='xl'>
					<Stepper.Step label='Fist step' description='Create an account'>
						Step 1 content: Create an account
					</Stepper.Step>
					<Stepper.Step label='Second step' description='Verify email' loading>
						Step 2 content: Verify email
					</Stepper.Step>
					<Stepper.Step label='Final step' description='Get full access'>
						Step 3 content: Get full access
					</Stepper.Step>
					<Stepper.Completed>
						Completed, click back button to get to previous step
					</Stepper.Completed>
				</Stepper>
			</Container>
		</>
	)
}
