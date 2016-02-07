var fs = require('fs');

var path = process.argv[2];
var buffer = fs.readFileSync(path);
var lines = buffer.toString().split('\n').length - 1

console.log(lines);
