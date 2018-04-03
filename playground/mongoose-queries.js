const {mongoose} = require('./../server/db/mongoose');
const {ObjectID} = require('mongodb');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
var email ='sushmita@yahoo.com';
var id='4ac26cb2068d66197ce6ff14';
// var id='5ac330767f94db3318af36da11';
// if(!ObjectID.isValid(id)){
//   console.log('Id is not valid');
// }
// Todo.find({
//   _id:id
// }).then((todos)=>{
//   console.log('Todos :',todos);
// });
//
// Todo.findOne({
//   _id :id
// }).then((todo) =>{
//   console.log('Todo :',todo);
// });

// Todo.findById(id).then((todo) =>{
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id:',todo);
// }).catch((error) =>{
//   console.log(error);
// });

User.find({
  _id:id
}).then((users) =>{
  console.log('Users ',users);
});

User.findOne({
  email:email
}).then((user) =>{
  console.log('User ',user);
});

User.findById(id).then((user) =>{
  if(!user){
    return console.log('Not able to find user');
  }
    console.log('User By Id ',user);
},(e)=>{
  console.log(e);
});
