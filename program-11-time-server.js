var net = require('net');
var strftime = require('strftime') 

var port = +process.argv[2];

function giveMeDate() {
	var date = new Date();
	//Expected output format "YYYY-MM-DD hh:mm" i.e. "2013-07-06 17:42"
    return strftime('%F %H:%M', date) + '\n';
}

var server = net.createServer(function (socket) { 
	socket.end(giveMeDate());
});

server.listen(port);
