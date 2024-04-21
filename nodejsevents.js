//events in node js example
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('waterFull', () => {
  console.log('please turn off the motor');
  setTimeout(() => {
    console.log('please turn off the motor,its a gental remainder');
  },3000)
  
});
console.log("the script is running")
myEmitter.emit('waterFull');
console.log("the script is still running")
