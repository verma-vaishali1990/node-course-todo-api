//const MongoClient =  require('mongodb').MongoClient;
const {MongoClient,ObjectID} =  require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) =>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
// db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((result) =>{
//   console.log(result);
// });
// db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result) =>{
//   console.log(result);
// });
// db.collection('Todos').findOneAndDelete({completed:false}).then((result) =>{
//   console.log(result);
// });
// db.collection('Users').deleteMany({name:'Vaishali'}).then((result) =>{
//   console.log(result);
// });
db.collection('Users').findOneAndDelete({_id:new ObjectID('5ac1ff1294e5c346acf2d5e1')}).then((result) =>{
  console.log(result);
});
  //db.close();
});
