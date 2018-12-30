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



// db.collection('Todos').find({
//   _id: new ObjectID('5c26786422f49167b25f55a9')
// }).toArray().then((docs) => {
//   console.log('Todos');
//   console.log(JSON.stringify(docs, undefined, 2));
// }, (err) => {
//   console.log('Unable to fetch Todos', err);
// })

// db.collection('Todos').find().count().then((count) => {
//   console.log(`Todos count: ${count}`);
// }, (err) => {
//   console.log('Unable to fetch Todos', err);
// })

db.collection('Users').find({name: 'Seth Little'}).toArray().then((docs) => {
  console.log('Users')
  console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
  console.log('Unable to fetch Users', err);
})

  //client.close(); // loses connection
}); // ES6 arrow function, and the TodoApp is created with this line, there are 2 arguments, error and db object - to read and write data
//console.log(JSON.stringify(result.ops, undefined, 2));
//_id: 123, // can manually select the id
