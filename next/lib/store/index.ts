import create from 'zustand'
import {persist} from 'zustand/middleware'

import {OrderedMap} from 'immutable'
import {persistOptions} from './storage'

interface StoreState {
	basketItems: OrderedMap<string, number>,
	addToBasket: (id: string) => void
	removeFromBasket: (id: string) => void,
	clearBasket: () => void,
}

export const useStore = create<StoreState>(persist(
	(set, get) => ({
		basketItems: OrderedMap(),
		addToBasket: (id) => {
			const existingCount = get().basketItems.get(id)
			set((state) => ({basketItems: state.basketItems.set(id, (existingCount ?? 0) + 1)}))
		},
		removeFromBasket: (id) => {
			const existingCount = get().basketItems.get(id)
			if (existingCount) {
				if (existingCount > 1) {
					set((state) => ({basketItems: state.basketItems.set(id, existingCount - 1)}))
				} else {
					set((state) => ({basketItems: state.basketItems.delete(id)}))
				}
			}
		},
		clearBasket: () => {
			set(() => ({basketItems: OrderedMap()}))
		},
	}),
	persistOptions,
))
