const itemDao = require('./ItemDao')

const itemTable = [{
      Id: 1,
      UserId: 1,
      Name:'Bike',
      Info: 'A fast bike with new wheels',
      Request: 'Car, newer model',
      Location: 'Uppsala'
    }, {
      Id: 2,
      UserId: 2,
      Name:'Car',
      Info: 'Cool car for a cool price',
      Request: 'I want a playstation 4 + 50 games',
      Location: 'Stockholm'
    }]

itemDao.read = function (callback) {
  let itemList = []

  itemTable.forEach(function (item) {
    itemList.push(item)
  })

  callback(itemList)
}

itemDao.getByUserId = function (userId, callback) {
  let items = []

  for (var i = 0; i < itemTable.length; i++) {
    if (itemTable[i].UserId == userId) {
      items.push(itemTable[i])
    }
  }

  if (items.length > 0) {
    callback(items)
  } else {
    console.log('ItemDAO Found no items for user ', userId)
    callback(null)
  }
}  

itemDao.create = function (item, callback) {
  let itemDto = {}
  item.Id = generateId()
  itemTable.push(item)

  itemDto.Id = item.Id
  itemDto.UserId = item.UserId
  itemDto.Name = item.Name
  itemDto.Info = item.Info
  itemDto.Request = item.Request
  itemDto.Location = item.Location
  console.log('ItemDAO Created new item: ', itemDto)

  callback(itemDto)
}

function generateId () {
  if (itemTable.length === 0) {
    return 1
  } else {
    let highestId = itemTable[itemTable.length - 1].Id
    return ++highestId
  }
}


module.exports = itemDao

