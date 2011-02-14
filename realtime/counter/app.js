var connect = require('connect'),
		io = require('socket.io');

var server = connect.createServer(
		connect.staticProvider(__dirname + '/public')
);

server.listen(3000);
console.log('Server started on 3000');
