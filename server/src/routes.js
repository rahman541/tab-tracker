const AuthenticationController = require('./controller/AuthenticationController')

module.exports = (app) => {
  app.post('/register', AuthenticationController.register)
}
