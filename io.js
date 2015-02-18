// filesystem operations need the fs module from the Node core library
var fs = require('fs');
var buf = fs.readFileSync('hipsum.txt');
var str = buf.toString();
var lines = str.split('\n');
console.log(lines.length - 1);