const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo.js');
const {Users} = require('./models/users.js');

let app = express();

app.use(bodyParser.json());

app.post('/todos',(req, res) => {
  let todo = new Todo({
    text: req.body.text
  });

  todo.save().then( (doc) => {
    res.status(200).send(doc);
  }, (err)=> {
    res.status(400).send(err);
  })
});

app.listen(process.env.PORT || 3000, ()=> {
  console.log(`Started on ${process.env.PORT || 3000}`);
});

module.exports = {app};
