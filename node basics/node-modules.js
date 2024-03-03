// Http Module

/*
const http = require('http');

http.createServer(function(req,res){
  res.writeHead(200,{'Content-type':'text/html'});
  res.end('End');
}).listen(8080);

*/

//General Module

const req = require('./module1');
const prompt = require('prompt');
prompt.start();

prompt.get(['filename'], function (err, result) {
  if (err) {
      return onErr(err);
  }
  req.request(result.filename,(result)=>{
    console.log(result);
  });
});







