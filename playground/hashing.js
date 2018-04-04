const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');


var data ={
  id :10
};

var token = jwt.sign(data,'vaishali');
console.log(`Token ${token}`);

var decoded = jwt.verify(token,'vaishali');
console.log('String decoded ',decoded);
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
