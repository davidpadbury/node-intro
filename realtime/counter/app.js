var connect = require('connect'),
		io = require('socket.io');

var server = connect.createServer(
		connect.static(__dirname + '/public')
);

server.listen(3002);
console.log('Server started on 3002');
