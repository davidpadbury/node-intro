var connect = require('connect');

var server = connect.createServer(
		connect.static(__dirname + '/public')
);

var io = require('socket.io').listen(server),
		counter = 0,
		updateCounters = function() {
			io.sockets.emit('counter-changed', counter);
		};

io.sockets.on('connection', function(socket) {

	counter = counter + 1;
	updateCounters();

	socket.on('disconnect', function() {
		counter = counter - 1;
		updateCounters();
	});

	socket.on('msg', function(msg) {
		io.sockets.emit('msg', msg);
	});

});

server.listen(3004);
console.log('Server started on 3004');
