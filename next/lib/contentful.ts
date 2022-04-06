import {createClient} from 'contentful'
import {documentToHtmlString} from '@contentful/rich-text-html-renderer'

// const client = createClient({
// 	space: process.env.CONTENTFUL_SPACE_ID,
// 	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
// })

const previewClient = createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
	host: 'preview.contentful.com',
})

async function getContentForPageId(typeId:string) {
	try {
		const result = await previewClient.getEntries({
			content_type: typeId,
			limit: 1,
		})
		if (!result.items.length) {
			throw new Error(
				`Found page content type "${typeId}",\n`
                + 'but no content was found for this content type (Did you make a content item?)',
			)
		}
		return result.items[0]
	} catch (error) {
		if (error.name !== 'InvalidQuery') throw error
		const errorData = JSON.parse(error.message)
		if (errorData.details?.errors?.[0]?.name === 'unknownContentType') {
			throw new Error(`No content type for page path found! Please make sure your content type has an id of "${typeId}"`)
		} else {
			throw error
		}
	}
}

export async function getPageDataForCurrentFile() {
	const pathPrefix = '/pages/'
	const prefixEnd = __filename.lastIndexOf(pathPrefix) + pathPrefix.length
	const postfixStart = __filename.lastIndexOf('.')
	const pathSlug = `pages-${__filename.slice(prefixEnd, postfixStart).replace(/\//g, '_')}`
	const data = await getContentForPageId(pathSlug)
	return data
}

export async function getPageDataById(id:string) {
	return previewClient.getEntry(id)
}
