import {GetStaticProps} from 'next'
import {Container, Image, Grid} from '@mantine/core'
import {Basket, Section, SectionNavbar} from '../components/Menu'
import getMenu, {Menu} from '../lib/menu'

export default function MenuPage({menu}: {menu: Menu}) {
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
						<Basket menu={menu} />
					</Grid.Col>
				</Grid>

			</Container>
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => ({
	props: {
		menu: await getMenu(),
	},
})
