import {Title, Text, Container, Image, BackgroundImage, Button, Box, Group, Footer, List, ListItem} from '@mantine/core'

export default function HomePage() {
	return (
		<>
			<Box sx={{maxWidth: 2000}}>
				<BackgroundImage
					src='https://images-na.ssl-images-amazon.com/images/S/pv-target-images/217d384d43552a94d1f27c497d706d1f4d31ab8d3c24160accb7179461bbe3dd._RI_.png'
				>
					<Title sx={{fontSize: 100, fontWeight: 900, letterSpacing: -2}} align='center'>
						Welcome to{' '}
						<Text sx={{fontSize: 100, fontWeight: 900}} color='orange' component='span'>
							Chatty Chef
						</Text>
					</Title>
				</BackgroundImage>
			</Box>
			<Container>
				<Title sx={{fontSize: 35, fontWeight: 200}} align='center' mt={10}>
					A little about us
				</Title>
				<Text sx={{fontSize: 18, fontWeight: 100}} align='center'>
					Our Chefs offer you perfect cooking, best served dishes with fresh ingredients and old recipes.
					We have only carefully sourced and seasonal ingredients in our disposal to make rustic.
					Their expert ingredient selection and exquisite cooking techniques result in memorable and craveable meals.
					We offer numerous items that can be found on our easy-to-access menu.
				</Text>
			</Container>
		</>
	)
}
