var http = require('http');
var bl = require('bl');

var url = [process.argv[2], process.argv[3], process.argv[4]];

function printStuff(response) {

	response.setEncoding('utf8');
	response.pipe(bl(function (err, data) {
		if (err)
			return console.error(err);

		data = data.toString();
		console.log(data);
	}))
}

function callUrl(url) {
	http.get(url, printStuff);	
}

callUrl(url);
