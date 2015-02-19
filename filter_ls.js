// filesystem operations need the fs module from the Node core library
var fs = require('fs');
var path = require('path');
//read file as a command line argument
var list = process.argv[2];
//read the file extension from the command line
var ext = process.argv[3];

fs.readdir(list, function (err, data) {
  if (err) throw err;
  
 var filtered = data.filter(function filteredList(data){
     var period = '.';
  return path.extname(data) === period.concat(ext) ;
});
console.log(filtered);
});


