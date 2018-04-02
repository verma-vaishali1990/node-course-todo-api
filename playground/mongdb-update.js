//const MongoClient =  require('mongodb').MongoClient;
const {MongoClient,ObjectID} =  require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) =>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  // db.collection('Todos').findOneAndUpdate({
  //   _id :new ObjectID('5ac21cf8c116af3d317253fd')
  // },{
  //   $set :{
  //     completed :true
  //   }
  // },{
  //   returnOriginal: false
  // }).then((result) =>{
  //   console.log(result);
  // });
  db.collection('Users').findOneAndUpdate({
    _id:new ObjectID('5ac21ed4c116af3d317254a2')},
  {
    $set :{
      name:'Vaishali'
    },
    $inc :{
        age: 1
    }
  },{
     returnOriginal: false
  }).then((result) =>{
    console.log(result);
  });
  //db.close();
});
