var http = require('http');
var url = require('url');

var port = +process.argv[2];


var server = http.createServer(function (request, response) { 
	response.writeHead(200, { 'Content-Type': 'application/json' })  
	
	var reqUrl = url.parse(request.url, true);
	var date = new Date(reqUrl.query.iso);
	var output = {};

	if (reqUrl.pathname === '/api/parsetime') {
		output = {  
       "hour": date.getHours(),  
       "minute": date.getMinutes(),  
       "second": date.getSeconds()  
     	};

	}
	else if (reqUrl.pathname === '/api/unixtime') {
		output = { "unixtime": date.getTime() };
	}
	else {
		console.log('invalid path: ' + reqUrl.pathname);
	}

	response.end(JSON.stringify(output));
});

server.listen(port);
