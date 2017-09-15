const AuthenticationController = require('./controller/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongController = require('./controller/SongController')
const BookmarkController = require('./controller/BookmarkController')

module.exports = (app) => {
  app.post('/register',
  	AuthenticationControllerPolicy.register,
  	AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)

  app.get('/songs',
    SongController.index)

  app.post('/song',
    SongController.post)

  app.get('/song/:songId',
    SongController.show)

  app.put('/song/:songId',
    SongController.update)

  app.get('/bookmarks',
  	BookmarkController.index)
}
