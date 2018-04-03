var express = require('express');
var bodyParser = require('body-parser');


var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} =  require('./models/user');
const {ObjectID} = require('mongodb');

var port = process.env.PORT || 3000;
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
  });
  console.log(req.body);
});

app.get('/todos',(req,res)=>{
  Todo.find().then((todos)=>{
    res.send({todos});
  },(error) =>{
    res.status(400).send(error);
  });
});

app.get('/todos/:id',(req,res) =>{
  var id = req.params.id;
  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }
  Todo.findById(id).then((todo) =>{
    if(todo){
      res.send({todo});
    }
    else{
      res.status(404).send();
    }
  },(error) =>{
    res.status(400).send();
  });
});

app.delete('/todos/:id',(req,res) =>{
  var id =req.params.id;
  if(!ObjectID.isValid){
   return res.status(404).send();
  }
  Todo.findByIdAndRemove(id).then((todo) =>{
    if(todo){
      res.send({todo});
    }
    else{
      res.status(400).send();
    }
  }).catch((error)=>{
      res.status(400).send();
  });
});
app.listen(port,() =>{
  console.log(`Started on port : ${port}`);
});
