const AuthenticationController = require('./controller/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
  app.post('/register',
  	AuthenticationControllerPolicy.register,
  	AuthenticationController.register)

  app.post('/login',
  	AuthenticationController.login)
}
