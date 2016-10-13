var itemTable = [
    {
    "ItemId":"1",
    "UserId":"1",
    "Title":"Släpkärra",
    "Info": "Släpkärra 3x4 m",
    "Request": "Skottkärra",
    "Location":"Uppsala"
    }
];

module.exports.create = function(newItem){
  if(newItem.Title !== '' && newItem.UserId !== '') {
    newItem.ItemId = itemId++ + '';
    itemTable.push(newItem);
    console.log('\n\n/Created new item: ' + newItem.Title);
    //callback(newItem);
  } else {
    console.log('\n\n/ItemDao: could not create item with no title or userId');
    //callback(null);
  }
}
