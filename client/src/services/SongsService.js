import Api from '@/services/Api'

export default {
  index () {
    return Api().get('songs')
  },
  post (song) {
    return Api().post('song', song)
  }
}

// Example call
// AuthenticationService.register({
//  email: 'test@yahoo.com',
//  password: '12345678'
// })
