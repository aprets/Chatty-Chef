/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
import preval from 'next-plugin-preval'
import {getPageDataById} from './contentful'
import {IMenuItemType, IMenuPageTypeFields, IMenuSectionType} from './types/generated/contentful'

export interface Menu {
	headerPictureUrl: string,
	headerPictureAlt: string,
	sections: IMenuSectionType[],
	itemsById: {
		[id: string]: IMenuItemType
	},
	sectionOrTagToIds: {[id: string]: string[]},
}

async function fetchMenuData() {
	console.log('Fetching menu data...')
	const pageData = await getPageDataById<IMenuPageTypeFields>('6VQHxmppQNVstAALdIVBlX')
	const fieldData = pageData.fields
	const sections = fieldData.menuSections.filter((section) => section.fields)
	const items: IMenuItemType[] = []
	const itemsById: {[id: string]: IMenuItemType} = {}
	const sectionOrTagToIds: {[id: string]: string[]} = {}
	for (const section of sections) {
		for (const item of section.fields.items.filter((i) => i.fields)) {
			items.push(item)
			const {metadata, sys} = item
			itemsById[sys.id] = item
			for (const rawSectionOrTag of [section.fields.virtualTagName, ...metadata.tags.map((t) => t.sys.id.slice(7))]) {
				const sectionOrTag = rawSectionOrTag.toLowerCase()
				if (!sectionOrTagToIds[sectionOrTag]) sectionOrTagToIds[sectionOrTag] = []
				sectionOrTagToIds[sectionOrTag].push(sys.id)
			}
		}
	}
	const menu: Menu = {
		headerPictureUrl: fieldData.headerPicture?.fields?.file?.url,
		headerPictureAlt: fieldData.headerPicture?.fields?.title,
		sections,
		itemsById,
		sectionOrTagToIds,
	}
	return menu
}

export default preval(fetchMenuData())
