var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
let db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://todo-app:todo@ds231549.mlab.com:31549/todo-app-api'
};
mongoose.connect(db.localhost || db.mlab);
module.exports= {mongoose};
