var http = require('http');

var url = process.argv[2];

function printStuff(response) {
	response.setEncoding('utf8');
	response.on("data", console.log);
	response.on("error", console.error);
}

function callUrl(url) {
	http.get(url, printStuff);	
}

callUrl(url);
