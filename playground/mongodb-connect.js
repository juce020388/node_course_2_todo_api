// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    return (console.log('Unable to connect to MongoDB server', err));
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });


  // db.collection('Users').insertOne({
  //   name: 'Hoperis',
  //   age: 30,
  //   locations: 'Pureno 6-70, Kupiskis, Lithuania'
  // },(err, results) => {
  //   if(err) {
  //     return console.log('Error inserting user', err);
  //   }
  //   console.log(results.ops[0]._id.getTimestamp());
  //   // console.log(JSON.stringify(results.ops, undefined,2));
  // });

  client.close();
});
