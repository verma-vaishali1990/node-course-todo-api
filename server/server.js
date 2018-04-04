const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const {ObjectID} = require('mongodb');



var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} =  require('./models/user');
var {authenticate} = require('./middleware/authenticate');
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

//Get All Todos
app.get('/todos',(req,res)=>{
  Todo.find().then((todos)=>{
    res.send({todos});
  },(error) =>{
    res.status(400).send(error);
  });
});

//Add todo
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

//Delete todo
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

//Update todo
app.patch('/todos/:id',(req,res) =>{
  var id =req.params.id;
  var body =_.pick(req.body,['text','completed']);

  if(!ObjectID.isValid){
   return res.status(404).send();
  }

  if(_.isBoolean(body.completed) && body.completed){
    body.completedAt = new Date().getTime();
  }else{
    body.completed =false;
    body.completedAt = null;
  }
  Todo.findByIdAndUpdate(id,{
    $set : body
  },{
    new :true
  }).then((todo) =>{
    if(!todo){
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e) =>{
    res.status(400).send();
  });
});

//Post user
app.post('/users',(req,res) =>{
  var body =_.pick(req.body,['email','password']);
  var user = new User(body);
  user.save().then(() =>{
    return  user.generateAuthToken();
  }).then((token)=>{
    res.header('x-auth',token).send({user});
  }).catch((e) =>{
    res.status(404).send(e);
  });
});


app.get('/users/me', authenticate, (req,res) =>{
 res.send(req.user);
});

app.listen(port,() =>{
  console.log(`Started on port : ${port}`);
});

module.exports={app};
