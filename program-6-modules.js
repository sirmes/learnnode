var custom = require('./custom_module');

custom(process.argv[2], process.argv[3], printIt);

function printIt(err, fileNames) {

	if (err != null)
		console.log(err);

	fileNames.forEach(function(file){
		console.log(file);
	});	
}
