const path = require('path');
console.log(path.sep);
// Platform specific path separator


// Join path
const filepath = path.join('/content','subfolder','/hello.txt');
console.log(filepath);

//Base name of the file path
console.log(path.basename(filepath));

//Absolute path of the file

console.log(path.resolve(__dirname,'content','subfolder','hello.txt'));