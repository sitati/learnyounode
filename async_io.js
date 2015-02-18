// filesystem operations need the fs module from the Node core library
var fs = require('fs');
//read file as a command line argument
var file = process.argv[2];
fs.readFile(file, function (err, data) {
  if (err) throw err;
 //convert buffer to string
var str = data.toString();
//split string at newline characters
var lines = str.split('\n');
// print number of lines
console.log(lines.length - 1);
});


