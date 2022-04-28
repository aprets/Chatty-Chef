import {Title, Text, Container, Divider, Image, Group, Blockquote} from '@mantine/core'
import {GetStaticProps} from 'next'
import {getPageDataById} from '../lib/contentful'
import {IHomePageTypeFields} from '../lib/types/generated/contentful'

export default function HomePage({data}: {data: IHomePageTypeFields}) {
	return (
		<>
			<Image src={data.headerPicture.fields?.file.url} alt={data.headerPicture.fields?.title} height='15vh' />
			<Container mb={50} size={1400}>
				<Title my={20} order={1}>{data.mainHeading}</Title>
				<Group mb={20} spacing='lg' grow>
					<Text color='gray' size='lg'> {data.mainTextBlock}
					</Text>
					<Image src={data.mainPicture.fields?.file?.url} alt={data.mainPicture.fields?.title} height='20vh' radius='sm' />
				</Group>
				<Divider my='sm' variant='dashed' />
				<Title my={20} order={1}>{data.secondaryHeading}</Title>
				<Group mb={20} spacing='lg' grow>
					<Image src={data.secondaryPicture.fields?.file?.url} alt={data.secondaryPicture.fields?.title} height='20vh' radius='sm' />
					<Blockquote color='orange'> {data.secondaryTextBlock}
					</Blockquote>
				</Group>
				<Divider my='sm' variant='dashed' />
				<Title my={20} order={1}>{data.bottomHeading}</Title>
				<Group mb={20} spacing='lg' grow>
					<Text color='gray' size='lg'>{data.bottomTextBlock}</Text>
					<Image src={data.bottomPicture.fields?.file?.url} alt={data.bottomPicture.fields?.title} height='20vh' radius='sm' />
				</Group>
				<Title my={20} order={2}>{data.subHeading}</Title>
				<Group mb={20} spacing='lg' grow>
					{data.pictureCollection.map((pic) => (
						<Image my={20} src={pic.fields?.file?.url} alt={pic.fields?.file?.fileName} radius='sm' />
					))}
				</Group>
				<Divider my='sm' variant='dashed' />
			</Container>
		</>
	)
}
export const getStaticProps: GetStaticProps = async (context) => {
	const pageData = await getPageDataById<IHomePageTypeFields>('7vPN3f79YeDX8R7LCEHgWS')
	const fieldData = pageData.fields
	return ({
		props: {
			data: fieldData,
		},
	})
}
