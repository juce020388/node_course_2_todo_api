const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/users');

let id ='5a9ee2cfc2fd9135e0f08e5a';
let userID = '5a9ec7b374abef2bdced6fcf';


if(!ObjectID.isValid(id)){
  console.log('Id not valid');
}

// Todo.find({
//   _id: id
// }).then( (todos)=>{
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

Todo.findById(id).then((todo) => {
  if(!todo) {
    return console.log('Id not found');
  }
  console.log('Todo By Id', todo);
}).catch((e) => console.log(e));


User.findById(userID).then((user) => {
  if(!user) {
    return console.log('user not found');
  }
  console.log('User by ID ', user);
}).catch((e) => {
  console.log('Error getting user ', e);
})
