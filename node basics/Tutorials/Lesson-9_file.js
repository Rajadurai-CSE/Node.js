const {readFileSync,writeFileSync } = require('fs');

const first_file = readFileSync('../../Files/basicidea.txt','utf8');
const second_file = readFileSync('../../Files/file2.txt');

//Creates a new file and adds the result
writeFileSync('../../Files/result.txt',`Here is the result: ${first_file},${second_file}`);


//Append to the existing file
writeFileSync('../../Files/result.txt',`Here is the result: ${first_file},${second_file}`,{flag: 'a'});
