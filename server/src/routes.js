const AuthenticationController = require('./controller/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongController = require('./controller/SongController')
const BookmarkController = require('./controller/BookmarkController')
const HistoryController = require('./controller/HistoryController')
const isAuthenticated = require('./policies/isAuthenticated')

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
    isAuthenticated,
    BookmarkController.index)

  app.post('/bookmarks',
    isAuthenticated,
    BookmarkController.post)

  app.delete('/bookmarks/:bookmarkId',
    isAuthenticated,
    BookmarkController.delete)

  app.get('/histories/',
    isAuthenticated,
    HistoryController.index)

  app.post('/histories/',
    isAuthenticated,
  	HistoryController.post)
}
