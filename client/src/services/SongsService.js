import Api from '@/services/Api'

export default {
  index (search) {
    return Api().get('songs', {
      params: {
        search: search
      }
    })
  },
  post (song) {
    return Api().post('song', song)
  },
  show (songId) {
    return Api().get(`song/${songId}`)
  },
  put (song) {
    return Api().put(`song/${song.id}`, song)
  }
}

// Example call
// AuthenticationService.register({
//  email: 'test@yahoo.com',
//  password: '12345678'
// })
