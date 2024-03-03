//Blocking Code

const http = require('http');

let server = http.createServer((req,res)=>{
  if(req.url==='/'){
    res.end("Hello World");
  }
  else if(req.url==='/about'){
    //Blocking Code 
    for(let i=0;i<1000;i++){
      for(let j=0;j<1000;j++){
        console.log(`${i} ${j}`);
      }
    };
    // res.end("About");
  }
  else{
    res.end(`<p>No page Found</p>
    <p> Navigate Back to Home Page </p>
    <a href='/'>Home page </a>
`);

  }
  

  
 
});

server.listen(8080,()=>{
  console.log("Listening on Port 8080");
});

