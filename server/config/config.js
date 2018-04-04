var env = process.env.NODE_ENV || "development";
if(env === "development"){
  var config = require('./config.json');
  var envConfig = config['development'];
  console.log(envConfig);
  Object.keys(envConfig).forEach((key)=>{
      process.env[key] = envConfig[key];
  });
}
