const {mongoose} = require('./../server/db/mongoose');
const {ObjectID} = require('mongodb');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) =>{
//   console.log(result);
// });
//
// Todo.findOneAndRemove();

Todo.findByIdAndRemove('5ac2681f266e6f1ac4c925ec').then((result)=>{
  console.log(result);
},(error) =>{
  console.log(error);
});

Todo.findOneAndRemove({
  _id:'5ac268d37ceba23eac01eb78'
}).then((result)=>{
  console.log(result);
});
