import {Title, Text, Container, Image, Box, Group} from '@mantine/core'

export default function AboutUsPage() {
	return (
		<>
			<Box sx={{maxWidth: 2000}}>
				<Title sx={{fontSize: 100, fontWeight: 900, letterSpacing: -2}} align='center'>
					About{' '}
					<Text sx={{fontSize: 100, fontWeight: 900}} color='orange' component='span'>
						us
					</Text>
				</Title>
			</Box>
			<Box>
				<Text mt={10} sx={{fontSize: 20, fontWeight: 200}} align='center'>
					Craving some delicious food? Maybe you’re in the mood for a juicy burger?
					No matter what kind of meal you have in mind, The Chatty Chef Restaurant is ready to prepare it for you.
					Since 1989, The Chatty Chef Restaurant has been the go-to restaurant for residents of Wood Green, London.
					Our restaurant serves meals all day, with fresh ingedients and flavorful dining options for lunch and dinner.
					From burgers to salads, kebabs to pizzas, you’ll find all kinds of hearty meals prepared fresh at The Chatty Chef Restaurant.
					Our restaurant also offers delicious desserts and other milkshakes.
				</Text>
				<Text mt={10} sx={{fontSize: 23, fontWeight: 300}} align='center'>
					We’re here to serve you the best food around, whenever you’re looking for a good hearty meal in London.
				</Text>
			</Box>
		</>

	)
}
