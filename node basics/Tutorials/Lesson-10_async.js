const {readFile,writeFile } = require('fs');

let first,second;

readFile('../../Files/basicidea.txt','utf8',(err,result)=>{
  if(err){
    console.log('error');
    return ;
  }
  first = result;
  readFile('../../Files/file2.txt','utf8',(err,result)=>{
    if(err){
      console.log('error');
      return;
    }
    second = result;
    writeFile('../../Files/result.txt',`Here we go the firstfile ${first} and secondfile ${second}`,(err,result)=>{
      if(err){
        console.log('error');
        return
      }
      console.log(result);
    })
  })
});

console.log('Hello running before Other Functions')