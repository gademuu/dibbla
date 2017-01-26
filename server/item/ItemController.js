const itemController = require('./ItemController')
const itemDao = require('./ItemDao')

itemController.registerItem = function (body, callback) {
  console.log('ItemController is registering new item...')
  itemDao.create(body, callback)
}

itemController.getItems = function (callback) {
  console.log('Fetching items...')
  itemDao.read(callback)
}
