// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    return (console.log('Unable to connect to MongoDB server', err));
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').find({completed:true}).toArray().then( (docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // }, (err) => {
  //   console.log('Unable to fetch Todos', err);
  // })

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch Todos', err);
  // })

  db.collection('Users').find({name:'Hoperis'}).toArray().then((users) => {
    console.log(JSON.stringify(users, undefined, 5));
    return users;
  },(err) => {
    console.log('Error fetching users from MongoDB', err);
  }).then((users)=> {
    console.log("Omg ",users.length);
  }, (error)=> {
    console.log(`Can't count users`);
  });


  client.close();
});
