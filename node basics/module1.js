// const fs = require('fs');
const resp = require('./module2')
const {access} = require('fs');

function request(file,callback){
  //Check for valid file or not
  access(file,(err)=>{
      if(!err){
        resp.response(file,(result)=>{
            callback(result);
          });
        }
      else{
        callback('error');
      }
    });
  };
  


module.exports = {
  request
}