var fs = require('fs');
var path = require('path');

var dirPath = process.argv[2];
var extension = '.' + process.argv[3];

function filterFiles(callback) {
	fs.readdir(dirPath, function fileList(error, list){
		list.forEach( function (file) {
			if (path.extname(file) == extension)
				console.log(file)
		})

		callback();
	});
}

function printIt() {}

filterFiles(printIt);
