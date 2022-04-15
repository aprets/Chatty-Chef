import {Box, SimpleGrid, Title, Text} from '@mantine/core'
import {Fragment} from 'react'
import {IMenuSectionType} from '../../lib/types/generated/contentful'
import {OffsetDiv} from '../OffsetDiv'
import {MenuItem} from './Item'

export function Section({section}: {section: IMenuSectionType}) {
	const {sys: {id: sectionId}, fields: sectionData} = section
	return (
		<Fragment key={sectionId}>
			<Box my={20}>
				<OffsetDiv id={`section-${sectionData.title}`} />
				<Title order={2}>{sectionData.title}</Title>
				{sectionData.description && <Text mt={5} color='gray'>{sectionData.description}</Text>}
			</Box>
			<SimpleGrid
				cols={3}
				spacing='lg'
				breakpoints={[
					{maxWidth: 'lg', cols: 2, spacing: 'md'},
					{maxWidth: 'md', cols: 1, spacing: 'sm'},
					// {maxWidth: 'xs', cols: 1, spacing: 'sm'},
				]}
			>
				{
					sectionData.items.filter((i) => i.fields).map((item) => (
						<MenuItem key={item.sys.id} item={item} />
					))
				}
			</SimpleGrid>

		</Fragment>
	)
}
