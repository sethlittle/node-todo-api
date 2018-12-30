//const MongoClient = require('mongodb').MongoClient; - reference
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

//Object destructuring
//
// var user = {name: 'Seth Little', age: 20};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert Todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2)); // stores all inserted results
  // })

  // db.collection('Users').insertOne({
  //   name: 'Seth Little',
  //   age: 20,
  //   location: 'Mocksville'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert new Doc', err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close(); // loses connection
}); // ES6 arrow function, and the TodoApp is created with this line, there are 2 arguments, error and db object - to read and write data
//console.log(JSON.stringify(result.ops, undefined, 2));
//_id: 123, // can manually select the id
