const itemDao = require('./ItemDao')

const itemTable = []

  // {
  //     Id:'1',
  //     UserId: '1',
  //     Name:"Släpkärra",
  //     Info: "Släpkärra 3x4 m",
  //     Request: "Skottkärra",
  //     Location: "Uppsala"
  //   }

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

