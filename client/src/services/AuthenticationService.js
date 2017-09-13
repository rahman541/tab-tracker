import Api from '@/services/Api'

export default {
	register: (credentials) {
		return Api().post('register', credentials)
	}
}

// Example call
// AuthenticationService.register({
// 	email: 'test@yahoo.com',
// 	password: '12345678'
// })
