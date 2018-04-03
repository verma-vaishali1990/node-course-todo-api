var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://todo-app:todo@ds231549.mlab.com:31549/todo-app-api');

module.exports= {mongoose};
