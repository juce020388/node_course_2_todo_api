// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    return (console.log('Unable to connect to MongoDB server', err));
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  //deleteMany
  //deleteOne
  //findOneAndDelete

  // db.collection('Todos').deleteMany({text: 'Something to do'}).then((result)=> {
  //   console.log(result);
  // });

  // db.collection('Todos').deleteOne({text: 'Walk your dog and eat'}).then( (res) => {
  //   console.log(res);
  // })

  // db.collection('Todos').findOneAndDelete({text:'Walk your dog and eat'}).then( (res)=> {
  //   console.log(res);
  // })

  // db.collection('Users').findOneAndDelete({_id: new ObjectID('5a9e68ed540dec2b1467bafe')}).then( (res) =>
  //   console.log(`User ${res.value.name} has been deleted`) , (error) =>console.log("User not found ", error))
  // .catch((err) => console.log("User not found ", err))


  client.close();
});
