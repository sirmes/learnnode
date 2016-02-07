var fs = require('fs');

var path = process.argv[2];
var lines = 0

function countLines(callback) {
	fs.readFile(path, function doneReading(error, content){
		lines += content.toString().split('\n').length - 1

		callback();
	});
}

function printIt() {
	console.log(lines);	
}

countLines(printIt);
