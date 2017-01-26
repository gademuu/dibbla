const userDao = require('./UserDao')
const userTable = [{
  Id: 1,
  Name: 'herman',
  Password: 'dibbla'
}]
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
  user.Id = generateId()
  userTable.push(user)

  userDto.Id = user.Id
  userDto.Name = user.Name
  console.log('UserDAO Created new user: ', user);

  callback(userDto)
}

userDao.get = function (user, callback) {
  let userToFind = null
  let userDto = {}

  for (var i = 0; i < userTable.length; i++) {
     if (userTable[i].Name === user.Name && userTable[i].Password === user.Password) {
      userToFind = userTable[i]
      break
    } else {
      console.log('UserDAO User not found')
    }
  }

  if (userToFind != null) {
    console.log('UserDAO Found user ', userToFind.Name)
    userDto.Id = userToFind.Id
    userDto.Name = userToFind.Name

    callback(userDto)
  } else {
    callback(null)
  }
}


function generateId () {
  if (userTable.length === 0) {
    return 1
  } else {
    let highestId = userTable[userTable.length - 1].Id
    return ++highestId
  }
}

module.exports = userDao

