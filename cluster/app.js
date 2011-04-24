var http = require('http');

module.exports = http.createServer(function(req, res) {

	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end("You've been served by " + process.pid);

});
