//const MongoClient =  require('mongodb').MongoClient;
const {MongoClient,ObjectID} =  require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) =>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  // db.collection("Todos").find({
  //   _id:new ObjectID('5ac2095bc116af3d31725118')
  // }).toArray().then((docs) =>{
  //   console.log('Todos')
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err) =>{
  //   console.log("Unable to fetch Todos",err);
  // });

  // db.collection("Todos").find().count().then((count) =>{
  //   console.log('Todos')
  //   console.log(`Todos count ${count}`);
  // },(err) =>{
  //   console.log("Unable to fetch Todos",err);
  // });

db.collection('Users').find({name:'Vaishali'}).toArray().then((docs) =>{

  console.log(`Users with name Vaishali`);
  console.log(JSON.stringify(docs,undefined,2));
},(error) =>{
  console.log('Unable to fetch Users',error);
})
  //db.close();
});
