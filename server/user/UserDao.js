const userDao = require('./UserDao')
const userTable = new Set()
/*
{
  Id:,
  Name:,
  Password:, 
  ProfilePicture:
}
*/


userDao.create = function (user, callback) {
  let userDto = {}
  user.Id = 1

  userTable.add(user)

  userDto.Id = user.Id
  userDto.Name = user.Name

  console.log('UserDAO Created new user: ', user);


  callback(userDto)

}


function generateId () {
  let usersArr = Array.from(userTable)
  let highestId = usersArr[usersArr.length - 1].id

  return ++highestId
}

module.exports = userDao

