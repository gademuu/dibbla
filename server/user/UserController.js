const userController = require('./UserController')
const userDao = require('./UserDao')

userController.registerUser = function (body, callback) {
  console.log('UserController is registering new user...')
  userDao.create(body, callback)
}

userController.loginUser = function (body, callback) {
  console.log('UserController authenticating user...')
  userDao.get(body, callback)
}

module.exports = userController