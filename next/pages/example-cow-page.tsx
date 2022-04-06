import {documentToHtmlString} from '@contentful/rich-text-html-renderer'
import {Container, Text, Image, Title} from '@mantine/core'
import {GetStaticProps} from 'next'
import {getPageDataById} from '../lib/contentful'
import {IExampleCowPageTypeFields} from '../lib/types/generated/contentful'

export default function CMSTest({data}: {data: IExampleCowPageTypeFields}) {
	return (
		<Container>
			<Title order={1}>{data.mainTitle}</Title>
			<Text dangerouslySetInnerHTML={{__html: documentToHtmlString(data.mainTopText)}} />
			<Image radius='md' src={data.picture.fields.file.url} alt={data.picture.fields.title} />
		</Container>

	)
}

export const getStaticProps: GetStaticProps = async (context) => {
	const pageData = await getPageDataById<IExampleCowPageTypeFields>('2t8WzRCU1OxvzNuSovbIGA')
	const fieldData = pageData.fields

	return ({
		props: {
			data: fieldData,
		},
	})
}
