import {Container, Text, Image, Title, SimpleGrid, Stack, Tabs} from '@mantine/core'
import {GetStaticProps} from 'next'
import {getPageDataById} from '../lib/contentful'
import {IMenuPageTypeFields} from '../lib/types/generated/contentful'
import {MenuItem, OffsetDiv, SectionNavbar} from '../components/Menu'

export default function MenuPage({data}: {data: IMenuPageTypeFields}) {
	const tabNames = data.menuSections.map((s) => s.fields.title)
	return (
		<Container>
			<Title order={1}>{data.mainTitle}</Title>
			{data.subtitle && <Text style={{paddingTop: 5, paddingBottom: 10}}> {data.subtitle} </Text>}
			<Image radius='md' src={data.headerPicture.fields.file.url} alt={data.headerPicture.fields.title} />
			<Tabs py={10}>
				{
					tabNames.map((name) => (
						<Tabs.Tab key={name} label={name}> </Tabs.Tab>
					))
				}
			</Tabs>
			{data.menuSections.map(({fields: sectionData}) => (
				<>
					<Stack my={20}>
						<Title id={`section-${sectionData.title}`} order={2}>{sectionData.title}</Title>
						{sectionData.description && <Text color='gray'>{sectionData.description}</Text>}
					</Stack>
					<SimpleGrid
						cols={3}
						spacing='lg'
						breakpoints={[
							{maxWidth: 'md', cols: 3, spacing: 'md'},
							{maxWidth: 'sm', cols: 2, spacing: 'sm'},
							{maxWidth: 'xs', cols: 1, spacing: 'sm'},
						]}
					>
						{
							sectionData.items.map(({sys, fields: {name, price, calories, description, picture}}) => (
								// <Grid.Col md={5} lg={4} key={sys.id}>
								<MenuItem
									{...{name, price, calories, description}}
										pictureUrl={picture.fields?.file?.url}
										pictureAlt={picture.fields?.title}
								// </Grid.Col>
							))
						}
					</SimpleGrid>
				</>
			))}
			<pre>{JSON.stringify(data, null, 4)}</pre>
		</Container>
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
