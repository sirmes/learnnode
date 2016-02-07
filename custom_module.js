
var fs = require('fs');
var path = require('path');

function filterFiles(dirPath, extension, callback) {
	fs.readdir(dirPath, function fileList(error, list){

		if (error)
			return callback(error);

		var fileNames = [];

		list.forEach( function (file) {
			if (path.extname(file) == '.' + extension) {
				fileNames.push(file);
			}

		})

		callback(null, fileNames);
	});
}

module.exports = function(dirPath, extension, callback) { 
	return filterFiles(dirPath, extension, callback);
}
