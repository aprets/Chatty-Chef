import {Title, Text, Container, Image, Box, Group, Center} from '@mantine/core'

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
					Craving some delicious food? Maybe you&apos;re in the mood for a juicy burger?
					No matter what kind of meal you have in mind, The Chatty Chef Restaurant is ready to prepare it for you.
					Since 1989, The Chatty Chef Restaurant has been the go-to restaurant for residents of Wood Green, London.
					Our restaurant serves meals all day, with fresh ingedients and flavorful dining options for lunch and dinner.
					From burgers to salads, kebabs to pizzas, you&apos;ll find all kinds of hearty meals prepared fresh at The Chatty Chef Restaurant.
					Our restaurant also offers delicious desserts and other milkshakes.
				</Text>
				<Text mt={10} sx={{fontSize: 23, fontWeight: 300}} align='center'>
					We’re here to serve you the best food around, whenever you&apos;re looking for a good hearty meal in London.
				</Text>
			</Box>
			<Center>
				<Image
					width={300}
					height={100}
					src='https://cdn.pixabay.com/photo/2018/02/19/20/28/abstract-3166168__340.png'
				/>
			</Center>
			<Title sx={{fontSize: 70, fontWeight: 400, letterSpacing: -2}} align='center'>
				Meet our {' '}
				<Text sx={{fontSize: 70, fontWeight: 400}} color='orange' component='span'>
					Team
				</Text>
			</Title>
			<Container>
				<Group>
					<Box>
						<Image
							ml={20}
							radius='lg'
							width={200}
							height={300}
							src='https://png.pngitem.com/pimgs/s/507-5077623_las-vegas-nv-personal-chef-job-cook-chef.png'
						/>
						<Text
							sx={{fontSize: 20, fontWeight: 40}}
							align='center'
						>
							Mark Bianchi
						</Text>
					</Box>
					<Box>
						<Image
							ml={20}
							radius='lg'
							width={200}
							height={300}
							src='https://genlish.com/wp-content/uploads/2015/12/o-FEMALE-CHEF-facebook.jpg'
						/>
						<Text
							sx={{fontSize: 20, fontWeight: 40}}
							align='center'
						>
							Alecia Kranston
						</Text>
					</Box>
					<Box>
						<Image
							ml={20}
							radius='lg'
							width={200}
							height={300}
							src='https://www.pngitem.com/pimgs/m/507-5077552_chef-de-partie-cooking-hell-s-kitchen-recipe.png'
						/>
						<Text
							sx={{fontSize: 20, fontWeight: 40}}
							align='center'
						>
							Chris Lindgren
						</Text>
					</Box>
					<Box>
						<Image
							ml={20}
							radius='lg'
							width={200}
							height={300}
							src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPDxAPDhAQDw8NEA0NDxAQDxAQDw8PFREWFhYRFRUZHSggGBolGxUVITEjJSkrLi4uFx8zODMuNygtLisBCgoKDg0OFRAQFisdIB0tLS0tKystKystLS0tLS03LSstLi0tKy0tLS0tLSsrLi0rLSs1Ky0rKy0tKy0tLS0rLf/AABEIANMA7wMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAABAAIDBAUGBwj/xAA7EAACAQMBBQUFBQcFAQAAAAAAAQIDBBEhBRIxQVEGE2FxgSIyUpGhBxQjQrEVYnLBwtHwNKKy4fEz/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAIhEBAAMAAgEEAwEAAAAAAAAAAAECEQMxEgQhMkETIlEU/9oADAMBAAIRAxEAPwD12794iiTXfvEMSKsQJEMgPQEsRyGocihwQIKCEIQgEIQgAJhAygCEIIQGEDAAGEQU0A5jQAIIAAAIAEBhAAmALABHd+8Qx4k937xDHiZVYgPQyA9ASoehiHoqCggQ5AAQQAIQhAJgYWBlQBCEAgMIAAxCYgoMAWAAACABDRwAAAImAGALAAy794hRPee8QxMqngPQyBIgJEPGRHlDkECHBAEEQAEEAAAOAVAAEQAEIQDRBAFBgCAAAHDQEALAABCEAGAIGArv3ivEsXnvECMqngPQ2A5ASxHjYjkVBQ4CCgEMlUSGVqmu6umWRJaalEzreAFVZG1kUpY8kESqp4DlNFZV4/4hOvEC0Ap/eXy4c8lunLeSfVZAIAgYAAxwAoACAAAYQMAACAACEIAACwAG74lePEsXnvFePEyqxEfEZEegJYjkNiPRUFDgIIGXK9i5TXjhPqloFXcOLklw0bJLzZym96Hsy5rlL+xkVLWUZ4ksPHg9CjTd0uTz5DMuRHRpFuESohdIidJrmy9gZUWgFSOXph6vC8WalGG7FJ8UkNtI4gvHL+bJiKAGEAQABEFNEFgAawBYAAILAwgACwAAARBSvOJXjxLF5xK8eJkWIj0MgPiFSxHobEciocggQQEcZ2n2xWhVlGgoLd9jfqQlNKSWeCkvH5HZnDdsY9zV1hLduGnCa1ip4w4y106+vgceebRXau/p4rN8sr7O2hczS362ZP4YwgvTCz9ShtXtBc0Jxp/d7qrKbSVSFWO4m3jXeenqsBsKm7LzN2dWnKCc8PHNnkpeZ95l778URH6wy9nbYr1qadTfptLOYznBrwks6PybQl2pkqipUpyrSWMwlGOGn+88PPqzTr0oOjPdWE6eOGNGYOzeylur23qxgk1XhWynLLksvXPLjpwN1tO9udqxnxenU44il0SX0CEDPe+YAggAaJhYAoMAWAAMaOYGAGAIGEBgCwAAAWAKN5xKm/qWb96nF7R2vOncKPLJzveK9tVrNunZwkTRZzdPaMm0lzN61nlLIraLdFqzHa5EehkRyNsniAggIwu2dJStJPnCdKUfNy3f6mbpg9qqdSrTVOnHKjNTnr7TwtElz1afoY5PhLpxfOHF2izo9Gi3FVIVFP2JU+HtOUXB8nzWP0/SG6i4reWko9efgyzszadOp7MsKXOMuPp1XkfOpmvq77K20LiVJtxzBVZRg1CSqJt9Enpx6fodD2Us5Tn309I0sxius2sN+if1KVlsWFxW/D0hHDqSS4Z5LxZ2tvQjTioQW7GKwkeni49t5fTzeo5oiPGvcnsQQHrfPAA5gZUNAOAAADKtaMfekl5vBBT2hSk2lNaYznRfMmw1krI1lettClB4lUin0zlk0ZqSTi009U1qmhExJNZjuBY0LAVkgCAAmNYQMKZtGWpyO0dlSnUVTkjptqwlKphEVS2nuni55m2xj2cNIiItrNtoJNeB0FrwOet4uM8PqdBa8C+m+2OftdgPRHBkiPW85yCIQQmzPUNZZ1UpOS8Mk1atl4QxIsCvc2VOqsVIKXi9H81qcd2i7I4TqW8m4rWdOWslHm4vn5M7rPUZJrO7lZazjKzjrjoc78Vb9w6cfNak+0uQ7B1e5rVKSaVOccuPDEo4xL/c/kd7GSfBp+TOQo9lYU7mNzCtUUoJwcMR3JxaaxLTP5uKwXbm4nTrUKUaFSpCv3qnWi493Q3Y5W+m8+1qljoOKs1rESvNaLXmYdGAy02uDa9S/b1d5a8V9TbkkYhAZUAAWAKobTpUVGVWpBSaWmW1l8lxOD21tCdLCo5jKTWXF53Yrjhc3qdZty6zPcXCmtfFtJ/pgxO8p1G4wpOc8axhDMsdXg8vJO2yHs4IisbLm5X8XvTqQblLCbVSfBLwZ6T2fcvutDfiovcTSTz7P5W/FrD9TA2X2RUqiq3EVGC1VL80v4scF4fodeopJJJJJJJLRJdEb4eOa7Ms+o5YtkQDGjmNO7ygwMIGABCAwHVl+IWXH2SrWku8LEpeycp+241zl1/9TXteBi3cvxfU2bTgcPT92deXqF2mSohpk6PW4CV6tfTTh+obypiOFxefkivv5Xl+pYQaa+Y8jH5KhxTnsyi7iN04Lv4U3RVTLz3bbeGs4fGWHy3n1LaFkBYGuI8z7baE53Neg6FSEKEaUo15Nd3WcllqK46ar0YFzdHU3hiKG06dxKVF29WFOMKsZV1OnvupR5wj8LfUg2ITTWV/4FlNTw8omhWzxWAqUgrVeS9QzqrkVpMDK27DdhKrj3V7WOnxGZ2Lud3fnNf6iW9nmorSK/V+p0c3nyfLkzLubNU1mCxHCSS/KunkZ8Ii3k6RybXxdHkBT2bUzBR+FJFts25gwMQAEBiYGAgCBkCpf05urmPAk3am7g0pQ1C4nGeGJnddo5piMxg/s9uWWaVCi0iw4j4o1XjivTna027NhEkyBtIrV7jBtlBeVs1EuW64+r/xEi5lC4lqpevyL5Qk/wDwbv8AQMQSg+QDp1eSCklxIoPnzJY9XxAMXz4ILZDVqrhy5kdS6jyafXDTwQzU8pjZMpVbl+X1ZRt9oVZVNxQqSUFGpUfd4hGEt7HtYw5ey9FnGmeJj8sbjr+G2a297VErlp9TOurynTpupOpCnBYfeSlGMVl6avTXK+Zz+0PtI2XQzGVxKo4pb3dUas0vOWN36m3LHVuW60+TWoIyUnjzw+vgebXP2w2Usqjb3VXHNqhBf82/oZtT7WJSklGx3IfFK5zJeO7GH8xpj1x0hrp8sZTPL39rM0sKms9XBy/rRTu/tYuMfhxSfjTgl+shpj123o4eVyeHnmscC0fOW0ftR2tN5hdOkvhhStv1dPJl1vtE2s+N9X9JKH/BIauPqAEtD5RrdttpyeXfXS8ritj5bx9Fdhbe4hs21++VKlW4nDvakqknKac25KGvRNL0A6JgRHORHKtpgqJnJAyU+91JVMDaaA4gcwd4ZAlDBDOqkK5r4Ri3N8uCLq4v1rkpzm2UZXPVjVdpczHkuL9Z5S+vyL6ei8kYNK8Upxj1ZuR4Y9DUTqTGHx4BjnkNSz5IdNSUfYSz4vXzNITis/LJW2hCtOE4Ud2DlTqKNSTfs1HHEHjonqWLanxb1edScI87h2BVJQqX13XvZ59pSlKFJvGUtW5PnrvLyNy17qjBQpU4U4LhGEVFeenM2du0pTtqqh78YucMcXKPtYXnhr1OSo2N1Uim92OUnutvOvoeXlrfy9o17OCaeP7TjV+9LqCu1OGVLEo+0sNrXGOCaytXoZX7LuHhNcdPeX9zQsNizjKM6jwottwzvb+jwnyxnD9DFaX3p0tbjztBRsHcWtaFxVnWhVa3FNYjCKUVhfFrl5a09DzbtB2RdCUt3M1NNPe4tPyPardLeS05LBJtXZVO4huySjJe7JJZT8eqPXEZ28U2fMNts90m1JYz1J5U8HrO2uw1aTe7ThUXJwkk/PDwcledgdpKX4dHeXR8V68CzA5CUSCodpD7Pdpy426XnOmv1kTw+yraE/e7mH8VVf0pkV5nVKVTOT2i0+xyplOtc0kuahGc39cHS7N+y3Z1FqVSDryjqt9ezn+EJ7PMPsp7DzvriFzXg1Z0JKbbWFWmnlQXVdT6KzggoUYU4qFOKhCOijFJJEknoahmUkMMbUpxIK9XdhkNKpmGSogrNIh74jvZlHviSH1O0jQJ9pGllnG7SvN2eEZ9/tCTxqcJtLrEO1u+1Cxq8GLW7Rwy915ZzsN+fLJo7N2enL2oYONuTY7dqcfvGwh2n2gqxjlD9l7WqzinLOps3Ox6Ulqhn3GMI4jE80zbO3vm3F9VS7KqzdzRf5d9ZO/orKz1PPbCpONWnpiKnDPlnU7mnNpaPgtPNnv4LeUPm89csvRl05fUe5le35rpgenq2d3Aac/afiibJBnVvyHoIkyZqpqDcVyL+SvVS3s83x9AI90a2QUdp0Z16ttCpF16Cg6tPXMVKKafjpJcOqJqiAZQ99P95Gm5HOX9nUqVKLp3FSh3VaFSagotVorOacs8n/nLFl7RkFbO8DeMV7SkNe0pEG3kDZiR2lLJLK+YGo2NbMj9osD2iyjWcgd4Y8tpMi/abyBt3NPfhhCpQ3YJMbaXCcVqOrVVjiaRlbRkZtWsorxLG1ayw9TkrnajUmuODMquz2BKrNyBW7KTkek7Ns47i0Lyt4dEY8Ya8nlln2bq0/E0Y2NWP5foeh9xHogOhDojnPDT+Okc9nns7et8JDUtq3wnozt4dENdvDoifgp/F/0XeZVLKu+TR1uza7lTW8sT03vNJfzRvO2h0RXurSG68LHiuJ0pSK9OdrzbtVtqqzLLXBNZfHiWqayjidq9olQqOG5vNaZb/kWdj7ZnXUpYUIxeNM6vGf7G9Zx1Tmk3lpCpVovRPL5eJi006j11XPxL3doqLtWbS6EFPV5I4x/6J4IIjVvBTlNRipySjKSit6SXBN8XjLFVRMyCqwKsH7TfoZF5XnGpNbr0lLHlyNeK1fqzP2hcONRrGjUZLxWP+hKwoO7n8LGu7n8LLaufBAlceCJq4pO9n8LJKW0JcHFj53Pgh1rV3pJNLUaYmhPeC0S3Vo4e1HgRRnkqB3eSjUuIJ4b1LzM+62ep5aeGQT07+KXvDa20U17xh3NjNcGZtajV6seUrjXvKrn+b6ma7PPMpN1F1HU600TZXHuOzvcXkT1GIQZMyBsQihjZG2ERQ6kK791gEQeLdqJv73LXmdN2bX4EP3pzb8eAhGK9tz06q1Wi9f5FgQjq5nRHiEJBqcCvMQiDL21/p6+rX4NbVNxa9iXBrVGHsabls/Z85NynK2TlKTbk+fF+bEIk9NV7W4hkIRGpQzJbD30IQT6dROKcNehzlTSbSEI0yeyKQhAVqqKtSC6CEBn3EF0KNSKAIiw//9k='
						/>
						<Text
							sx={{fontSize: 20, fontWeight: 40}}
							align='center'
						>
							Carly Thomson
						</Text>
					</Box>
				</Group>
			</Container>
			<Text mt={10} sx={{fontSize: 20, fontWeight: 200}} align='center'>
				We are a team of experienced chefs who are passionate about good food and dedicated to showcasing
				the products of local artisans and producers from the community.
				When we opened the restaurant almost two years ago, we knew that we would
				draw on our individual backgrounds to make it a unique dining experience, and each of us brings with him/her a unique perspective and passion.
			</Text>
			<Text mt={10} sx={{fontSize: 20, fontWeight: 200}} align='center'>
				Chris attended the Culinary Institute of America, after which he spent eight years working in various NYC restaurants,
				including Brasserie 8 ½ and Kiki on the Seine.
				He&apos;s now developed the restaurant&apos;s menus, and he loves using local ingredients as much as possible.
				In addition, Alecia was the first executive chef of Savour in Allentown, in San Francisco.
			</Text>
			<Text mt={10} sx={{fontSize: 20, fontWeight: 200}} align='center'>
				Our newest chefs, Mark and Carly, are local favorites and both have experience in the culinary field.
				Mark received a chef&apos;s certificate from the Advanced Culinary Training Program (ACTP), and Carly studied at George Washington University.
				Since opening, the team has strived to serve a menu that is simple yet sophisticated, with fresh, local ingredients,
				and share some fun stories about our local community and area
			</Text>

		</>

	)
}
