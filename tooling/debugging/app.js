var http = require('http');

var server = http.createServer(function(req, res) {
	
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('Hi ALT.NET!');

});

server.listen(3000);
console.log('Listening on 3000');
