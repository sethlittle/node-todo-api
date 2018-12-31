//const MongoClient = require('mongodb').MongoClient; - reference
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

//Object destructuring
//
// var user = {name: 'Seth Little', age: 20};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

//deleteMany
// db.collection('Users').deleteMany({
//   name: 'Seth Little'
// }).then((result) => {
//   console.log(result);
// });

//deleteOne
// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
//   console.log(result);
// });

//findOneAndDelete - also returns values
var id = new ObjectID('5c296ef30cc690d03c36b40b');
db.collection('Users').findOneAndDelete({_id: id}).then((result) => {
  console.log(result);
});

  //client.close(); // loses connection
}); // ES6 arrow function, and the TodoApp is created with this line, there are 2 arguments, error and db object - to read and write data
//console.log(JSON.stringify(result.ops, undefined, 2));
//_id: 123, // can manually select the id
