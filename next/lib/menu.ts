/* eslint-disable no-console */
import fs from 'fs'
import path from 'path'
import {getPageDataById} from './contentful'
import {IMenuItemType, IMenuPageTypeFields, IMenuSectionType} from './types/generated/contentful'

export interface Menu {
	headerPictureUrl: string,
	headerPictureAlt: string,
	sections: IMenuSectionType[]
	items: IMenuItemType[]
	itemsById: {
		[id: string]: IMenuItemType
	}
}

async function fetchMenuData() {
	console.log('Fetching menu data...')
	const pageData = await getPageDataById<IMenuPageTypeFields>('6VQHxmppQNVstAALdIVBlX')
	const fieldData = pageData.fields
	const sections = fieldData.menuSections.filter((section) => section.fields)
	const items: IMenuItemType[] = sections.reduce((acc, section) => [...acc, ...section.fields.items.filter((item) => item.fields)], [])
	const itemsById: {[id: string]: IMenuItemType} = items.reduce((acc, item) => ({...acc, [item.sys.id]: item}), {})
	return {
		// rawFields: fieldData,
		headerPictureUrl: fieldData.headerPicture?.fields?.file?.url,
		headerPictureAlt: fieldData.headerPicture?.fields?.title,
		sections,
		items,
		itemsById,
	}
}

const MENU_CACHE_PATH = '.menu.json'

export default async function getMenu() {
	let cachedData

	try {
		cachedData = JSON.parse(
			fs.readFileSync(path.join(__dirname, MENU_CACHE_PATH), 'utf8'),
		)
	} catch (error) {
		console.log('Menu cache not initialized')
	}

	if (!cachedData) {
		const data = await fetchMenuData()

		try {
			fs.writeFileSync(
				path.join(__dirname, MENU_CACHE_PATH),
				JSON.stringify(data),
				'utf8',
			)
			console.log('Wrote to menu cache')
		} catch (error) {
			console.log('ERROR WRITING MENU CACHE TO FILE')
			console.log(error)
		}

		cachedData = data
	}

	return cachedData
}
