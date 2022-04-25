import {Container, Image, Grid} from '@mantine/core'
import {Basket, Section, SectionNavbar} from '../components/Menu'
import menu from '../lib/menu.preval'

export default function MenuPage() {
	return (
		<>

			<Image src={menu.headerPictureUrl} alt={menu.headerPictureAlt} height='15vh' />
			<SectionNavbar sectionNames={menu.sections.map((s) => s.fields.title)} />
			<Container size={1920} my={20}>
				<Grid>
					<Grid.Col xs={12} md={8}>
						{menu.sections.map((section) => (
							<Section key={section.sys.id} section={section} />
						))}
					</Grid.Col>
					<Grid.Col xs={12} md={4}>
						<Basket />
					</Grid.Col>
				</Grid>

			</Container>
		</>
	)
}
