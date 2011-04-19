var express = require('express'),
		server = express.createServer();

server.configure(function() {
		server.use( express.static(__dirname + '/public') );
		server.set('view engine', 'ejs');
		server.set('view options', { layout: false });
});

server.get('/', function(req, res) {
		res.render('index');
});

server.listen(3000);
console.log('server listening on 3000');
