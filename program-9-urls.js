var http = require('http');
var bl = require('bl');

var urls = [process.argv[2],process.argv[3], process.argv[4]];
var data_results = [];
var count = 0;

function flushData(data_results) {
	data_results.forEach(function (data) {
		console.log(data);
	})
}

function callUrl(urls) {
	urls.forEach(function(url, index){
		http.get(url, function (response) {
			response.pipe(bl(function (err, data) {
			if (err)
				return console.error(err);

			data_results[index] = data.toString();
			count++;	

			if (count == 3) 
				flushData(data_results);
			}))
		});
	})
}

callUrl(urls);
