var http = require('http');

var server = http.createServer(function(req, res) {

	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('Hello from node.js!');
});

server.listen(3000);
console.log('Server started on 3000');
