import {getApps, initializeApp} from 'firebase/app'

if (getApps().length < 1) {
	initializeApp({
		// cspell:disable-next-line -- disables checking till the end of the next line.
		apiKey: 'AIzaSyD4sS4DfgyGv7VDNr703EmFxPuscdiVXAg',
		// cspell:disable-next-line -- disables checking till the end of the next line.
		authDomain: 'chatty-chef.firebaseapp.com',
		projectId: 'chatty-chef',
		// cspell:disable-next-line -- disables checking till the end of the next line.
		storageBucket: 'chatty-chef.appspot.com',
		messagingSenderId: '1064412809901',
		appId: '1:1064412809901:web:7cf34e1914fda32c5ad424',
		// cspell:disable-next-line -- disables checking till the end of the next line.
		measurementId: 'G-1QDH59SMHL',
	})
}
