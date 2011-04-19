var fs = require('fs'),
		http = require('http');

var server = http.createServer(function(req, res) {

		fs.readFile('./public/data.txt', function(err, data) {
			res.writeHead(200, { 'Content-Type': 'text/plain' });
			res.end(data);
		});

});

server.listen(3000);
console.log('Server listening on 3000');
