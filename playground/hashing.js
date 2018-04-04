const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt =require('bcryptjs');



var password="Password@123";
// var saltPassword = bcrypt.genSalt(10,(err,salt) =>{
//   bcrypt.hash(password,salt,(err,hash) =>{
//     console.log('Hahs ',hash);
//   });
// });

var hashedPassword = '$2a$10$hTMIrzmU8DHTlyKly.iWCed93AJaSX5leHPMd5h0nXFQelhFqXOsW';
bcrypt.compare(password,hashedPassword,(error,result)=>{
  console.log(result);
});
// var data ={
//   id :10
// };
//
// var token = jwt.sign(data,'vaishali');
// console.log(`Token ${token}`);
//
// var decoded = jwt.verify(token,'vaishali');
// console.log('String decoded ',decoded);
//jwt.verify
// var data ={
//   id: 4
// };
//
// var token= {
//   data,
//   hash: SHA256(JSON.stringify(data)+'somesecret').toString()
// };
//
// token.data.id=5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();
// var resultHash = SHA256(JSON.stringify(token.data)+'somesecret').toString();
//
// if(resultHash === token.hash){
//   console.log('Data was not tempered');
// }else{
//   console.log('Data was chanegd.. Dont trust!!');
// }
