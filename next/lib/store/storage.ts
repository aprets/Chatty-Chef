import {OrderedMap} from 'immutable'
import {useLayoutEffect} from 'react'
import {StateStorage} from 'zustand/middleware'

const localStorageItemName = 'chatty-chef'

let reactLoaded = false
let reactLoadedHook = () => {}
export const storage: StateStorage = {
	getItem: async (name: string): Promise<string | null> => {
		const item = localStorage.getItem(name)
		if (reactLoaded) {
			return new Promise((resolve) => {
				resolve(item)
			})
		}
		return new Promise((resolve) => {
			reactLoadedHook = () => {
				reactLoaded = true
				resolve(item)
			}
		})
	},
	setItem: async (name: string, value: string): Promise<void> => {
		localStorage.setItem(name, value)
	},
	removeItem: async (name: string): Promise<void> => {
		localStorage.removeItem(name)
	},
}

export const persistOptions = {
	getStorage: () => storage,
	name: localStorageItemName,
	serialize: (state) => JSON.stringify({...state, version: process.env.CONFIG_BUILD_ID}),
	// prevent native rehydration
	deserialize: (str) => {
		const {state, version} = JSON.parse(str)
		return {
			state: version === process.env.CONFIG_BUILD_ID
				? {
					...state,
					basketItems: OrderedMap(state.basketItems),
				}
				: {},
		}
	},
}

export const useStoreHydrate = () => {
	if (typeof window !== 'undefined') {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		useLayoutEffect(() => {
			reactLoaded = true
			reactLoadedHook()
		}, [])
	}
}
