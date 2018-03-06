// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    return (console.log('Unable to connect to MongoDB server', err));
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a9e6909e841ba186c0e56b5')
  }, {
    $set: {
      name: 'Petrasasasas'
    }
  },{
    returnOriginal : false
  }).then((res) => {
    console.log(res);
  })


  client.close();
});
