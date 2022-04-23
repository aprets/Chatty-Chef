import {Timestamp} from 'firebase/firestore'

export interface Order {
	status: 0 | 1 | 2 | 3 | 4,
	address: string,
	items: {
		name: string,
		quantity: number,
		price: number
	}[],
	placed: Timestamp
}
