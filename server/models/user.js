var mongoose= require('mongoose');

var User =mongoose.model('User',{
  email:{
    required:true,
    trim:true,
    minlenth:1,
    type:String
  }
});

module.exports={User};
