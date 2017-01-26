const userController = require('./UserController')
const userDao = require('./UserDao')
const itemDao = require('../Item/ItemDao')

userController.registerUser = function (body, callback) {
  console.log('UserController is registering new user...')
  userDao.create(body, callback)
}

userController.loginUser = function (body, callback) {
  console.log('UserController authenticating user...')
  userDao.get(body, function(userData) {
    itemDao.getByUserId(userData.Id, function(items) {
      var userAndItems = [userData, items]
      callback(userAndItems)
    })
  })
}

module.exports = userController