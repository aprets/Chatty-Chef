import {createClient} from 'contentful'

const isDev = process.env.NODE_ENV === 'development'

const productionClientOptions = { // Production mode
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
}

const previewClientOptions = { // Preview mode
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
	host: 'preview.contentful.com',
}

const client = createClient(isDev ? previewClientOptions : productionClientOptions)

export async function getPageDataById(id:string) {
	try {
		return await client.getEntry(id)
	} catch (error) {
		if (error.message === 'The resource could not be found.') {
			throw new Error(
				'Error loading the page data from the CMS\n'
				+ `Page Data with content item id ${id} not found!\n`
                + 'Please navigate to Content->Your Page Content Item->Info(Right Sidebar)->ENTRY ID\n'
                + 'and provide this as the parameter.\n',
			)
		} else {
			throw error
		}
	}
}
