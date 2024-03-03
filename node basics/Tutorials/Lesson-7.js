//Os module
const os = require('os');

//Info about the user
const user = os.userInfo();
console.log(user);

// Method returns the system uptime in seconds

console.log(` ${os.uptime()} seconds `);

//Returns in seconds

const currentOs = {
  name:os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem : os.freemem()
}

console.log(currentOs);

