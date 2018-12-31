const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  //findOneAndUpdate
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5c267997dc88db67b7db28ee"),
    //google mongodb update operators
  }, {
    $set: { // update operators
      name: 'Seth Little'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((results) => {
    console.log(results);
  });
  //client.close();
});
