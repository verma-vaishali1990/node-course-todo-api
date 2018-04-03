var express = require('express');
var bodyParser = require('body-parser');


var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} =  require('./models/user');

var app = express();
app.use(bodyParser.json());
app.post('/todos',(req,res) =>{
  var todo = new Todo({
    text : req.body.text,
    completed: req.body.completed
  });
  todo.save().then((doc)=>{
    res.send(doc);
  },(error) =>{
    res.status(400).send(error);
  })
  console.log(req.body);
});

app.get('/todos',(req,res)=>{
  Todo.find().then((todos)=>{
    res.send({todos});
  },(error) =>{
    res.status(400).send(error);
  });
});
//Get
app.listen('3000',() =>{
  console.log('Started on port 3000');
});
