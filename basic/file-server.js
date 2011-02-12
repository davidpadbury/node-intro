var fs = require('fs'),
		http = require('http');

var server = http.createServer(function(req, res) {
	
		var urlBits = req.url.split('/'),
			filename = urlBits[ urlBits.length - 1 ];

		fs.readFile('./public/' + filename, function(err, data) {
			
			if (err) {
				res.writeHead(500, { 'Content-Type': 'text/plain' });
				res.end(err.message);
			} else {
				res.writeHead(200, { 'Content-Type': 'text/plain' });
				res.end(data);
			}

		});

});

server.listen(3000);
console.log('Server listening on 3000');
