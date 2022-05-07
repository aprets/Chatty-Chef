import {Title, Text, Container, Image, Group, Stack, Blockquote, Divider} from '@mantine/core'

export default function AboutUsPage() {
	return (
		<>
			<Image src='https://www.thebalancesmb.com/thmb/kectf9d4azgI8yVnBuoB0h2Z8zA=/3865x2174/smart/filters:no_upscale()/overhead-view-of-smiling-female-friends-sharing-lunch-in-restaurant-928010348-5b4abe8f46e0fb003712c478.jpg' alt='about-us' height='15vh' />
			<Container mb={50} size={1400}>
				<Group mt={50} mb={30} grow spacing='xl'>
					<Image src='https://www.chefscompliments.co.uk/wp-content/uploads/2017/06/chefs-min-min.jpg' alt='chef' radius='sm' />
					<Stack>
						<Title order={1} align='center'>Where it all began...</Title>
						<Blockquote color='orange'>Craving some delicious food? Maybe you&apos;re in the mood for a juicy burger?
							No matter what kind of meal you have in mind, The Chatty Chef Restaurant is ready to prepare it for you.
						</Blockquote>
					</Stack>
				</Group>
				<Divider my='sm' variant='dashed' />
				<Title order={2} >Our Story</Title>
				<Text my={10} size='lg' color='gray'>
					Since 1989, The Chatty Chef Restaurant has been the go-to restaurant for residents of Wood Green, London.
					Our restaurant serves meals all day, with fresh ingedients and flavorful dining options for lunch and dinner.
					From burgers to salads, kebabs to pizzas, you&apos;ll find all kinds of hearty meals prepared fresh at The Chatty Chef Restaurant.
					Our restaurant also offers delicious desserts and other milkshakes.
				</Text>
				<Title my={20} order={2}> Meet our Chatty Team</Title>
				<Group grow spacing='xl'>
					<Image height='15vh' src='https://onlychefs.co.uk/blog/wp-content/uploads/2016/03/Tips-for-becoming-a-head-chef.png' alt='chef' radius='sm' />
					<Image height='15vh' src='https://media.istockphoto.com/photos/beautiful-chef-working-in-a-kitchen-at-a-restaurant-picture-id1142230160?k=20&m=1142230160&s=612x612&w=0&h=JJO9FIclsxAS19pi7gd3j_8e0fk_RI6mpkZ_b_VrMJI=' alt='chef' radius='sm' />
					<Image height='15vh' src='https://i2-prod.dailyrecord.co.uk/incoming/article26859395.ece/ALTERNATES/s615b/0_Chef-Jimmy-Lee.jpg' alt='chef' radius='sm' />
					<Image height='15vh' src='https://www.hitsa.com.au/wp-content/uploads/types-of-chefs.jpg' alt='chef' radius='sm' />
				</Group>
				<Text my={10} size='lg' color='gray'>
					We are a team of experienced chefs who are passionate about good food and dedicated to showcasing
					the products of local artisans and producers from the community.
					When we opened the restaurant almost two years ago, we knew that we would
					draw on our individual backgrounds to make it a unique dining experience, and each of us brings with them a
					unique perspective and passion.
				</Text>
				<Text my={10} size='lg' color='gray'>
					Chris attended the Culinary Institute of America, after which he spent eight years working in various NYC restaurants,
					including Brasserie 8 ½ and Kiki on the Seine.
					He&apos;s now developed the restaurant&apos;s menus, and he loves using local ingredients as much as possible.
					In addition, Alecia was the first executive chef of Savour in Allentown, in San Francisco.
				</Text>
				<Text my={10} size='lg' color='gray'>
					Our newest chefs, Mark and Carly, are local favorites and both have experience in the culinary field.
					Mark received a chef&apos;s certificate from the Advanced Culinary Training Program (ACTP), and Carly studied at George Washington 
					University. Since opening, the team has strived to serve a menu that is simple yet sophisticated, with fresh, local ingredients,
					and share some fun stories about our local community and area
				</Text>
			</Container>
		</>

	)
}
