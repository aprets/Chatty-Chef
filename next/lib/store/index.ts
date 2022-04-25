import create from 'zustand'
import {persist} from 'zustand/middleware'

import {OrderedMap} from 'immutable'
import {v4 as uuidv4} from 'uuid'
import {persistOptions} from './storage'

interface Message {
	sender: 'user' | 'bot',
	text?: string,
	image?: string,
}
interface StoreState {
	uuid: string,
	basketItems: OrderedMap<string, number>,
	chatMessages: Message[],
	addChatMessages: (newMessages: Message[]) => void,
	addToBasket: (id: string) => void
	removeFromBasket: (id: string) => void,
	clearBasket: () => void,
}

export const useStore = create<StoreState>(persist(
	(set, get) => ({
		uuid: uuidv4(),
		chatMessages: [{sender: 'bot', text: 'Hello I am the Chatty Chef, how could I help you?'}],
		addChatMessages: (newMessages) => {
			set((state) => ({chatMessages: [...state.chatMessages, ...newMessages]}))
		},
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
