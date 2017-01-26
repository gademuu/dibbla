const userController = require('./UserController')
const userDao = require('./UserDao')

userController.registerUser = function (body, callback) {
  console.log('UserController is regestering new user...');
  userDao.create(body, callback)
}

module.exports = userController