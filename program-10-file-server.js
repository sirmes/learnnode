var http = require('http');
var fs = require('fs');

var port = +process.argv[2];
var filePath = process.argv[3];


var server = http.createServer(function (request, response) { 
	response.writeHead(200, { 'content-type': 'text/plain' }) 
	
	var source = fs.createReadStream(filePath)
	source.pipe(response);

});

server.listen(port);
