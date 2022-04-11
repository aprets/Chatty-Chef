import {Container, Text, Image, Title, SimpleGrid, Box} from '@mantine/core'
import {GetStaticProps} from 'next'
import React from 'react'
import {getPageDataById} from '../lib/contentful'
import {IMenuPageTypeFields} from '../lib/types/generated/contentful'
import {MenuItem, OffsetDiv, SectionNavbar} from '../components/Menu'

export default function MenuPage({data}: {data: IMenuPageTypeFields}) {
	const camelToTitleCase = (camelCase) => camelCase
		.replace(/([A-Z])/g, (match) => ` ${match}`)
		.replace(/^./, (match) => match.toUpperCase())
		.trim()

	return (
		<>

			<Image src={data.headerPicture.fields.file.url} alt={data.headerPicture.fields.title} height='15vh' />
			<SectionNavbar sectionNames={data.menuSections.filter((s) => s.fields).map((s) => s.fields.title)} />
			<Container size='xl' my={20}>

				{data.menuSections.filter((s) => s.fields).map(({sys: {id: sectionId}, fields: sectionData}) => (
					<React.Fragment key={sectionId}>
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
									sys: {id: itemId},
									fields: {name, price, description, picture},
									metadata: {tags},
								}) => (
									<MenuItem
										key={itemId}
										{...{name, price, description}}
										pictureUrl={picture?.fields?.file?.url}
										pictureAlt={picture?.fields?.title}
										tags={tags.map((t) => camelToTitleCase(t.sys.id.slice(7)))}
									/>
								))
							}
						</SimpleGrid>
					</React.Fragment>
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
