import {Container, Text, Image, Title, SimpleGrid, Box} from '@mantine/core'
import {GetStaticProps} from 'next'
import {getPageDataById} from '../lib/contentful'
import {IMenuPageTypeFields} from '../lib/types/generated/contentful'
import {MenuItem, OffsetDiv, SectionNavbar} from '../components/Menu'

export default function MenuPage({data}: {data: IMenuPageTypeFields}) {
	return (
		<>

			<Image src={data.headerPicture.fields.file.url} alt={data.headerPicture.fields.title} height='15vh' />
			<SectionNavbar sectionNames={data.menuSections.filter((s) => s.fields).map((s) => s.fields.title)} />
			<Container size='xl' my={20}>

				{data.menuSections.filter((s) => s.fields).map(({fields: sectionData}) => (
					<>
						<Box my={20}>
							<OffsetDiv id={`section-${sectionData.title}`} />
							<Title order={2}>{sectionData.title}</Title>
							{sectionData.description && <Text mt={5} color='gray'>{sectionData.description}</Text>}
						</Box>
						<SimpleGrid
							cols={4}
							spacing='lg'
							breakpoints={[
								{maxWidth: 'md', cols: 3, spacing: 'md'},
								{maxWidth: 'sm', cols: 2, spacing: 'sm'},
								{maxWidth: 'xs', cols: 1, spacing: 'sm'},
							]}
						>
							{
								sectionData.items.filter((i) => i.fields).map(({
									sys,
									fields: {name, price, description, picture},
									metadata: {tags},
								}) => (
									<MenuItem
										key={sys.id}
										{...{name, price, description}}
										pictureUrl={picture.fields?.file?.url}
										pictureAlt={picture.fields?.title}
										tags={tags.map((t) => t.sys.id.slice(7))}
									/>
								))
							}
						</SimpleGrid>
					</>
				))}
			</Container>
			{/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
		</>
	)
}

export const getStaticProps: GetStaticProps = async (context) => {
	const pageData = await getPageDataById<IMenuPageTypeFields>('6VQHxmppQNVstAALdIVBlX')
	const fieldData = pageData.fields

	return ({
		props: {
			data: fieldData,
		},
	})
}
