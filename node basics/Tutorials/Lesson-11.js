const http = require('http');

const server = http.createServer((req,res)=>{
  if(req.url==='/'){
    res.end('Welcome to Home Page');

  }
  else if(req.url==='/about'){
    res.end('Here is the short History about our company')
  }
  else{
    res.end(
      `<h1>Oops!</h1>
      <p>We can't seem to find the page you are looking for </p>
      <a href="/">Back home </a>
      `
    )
  }
  
 
});

server.listen(8080);

// console.log(http)
