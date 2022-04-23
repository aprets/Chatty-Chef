const API = {
	GetChatbotResponse: async (message) => new Promise((resolve, reject) => {
		setTimeout(() => {
			if (message === 'hi') resolve('Hello I am the Chatty Chef, how could I help you?')
			else resolve(`echo : ${message}`)
		}, 1000)
	}),
}

export default API
