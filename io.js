// filesystem operations need the fs module from the Node core library
var fs = require('fs');
//read file as a command line argument
var buf = fs.readFileSync(process.argv[2]);
//convert buffer to string
var str = buf.toString();
//split string at newline characters
var lines = str.split('\n');
// print number of lines
console.log(lines.length - 1);