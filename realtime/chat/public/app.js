var connect = require('connect'),
		io = require('socket.io');

var server = connect.createServer(
		connect.staticProvider(__dirname + '/public')
);

var socket = io.listen(server),
		counter = 0;

socket.on('connection', function(client) {

	console.log('Client connected');
	counter = counter + 1;
	socket.broadcast(counter);

	client.on('disconnect', function() {
		console.log('Client disconnected');
		counter = counter - 1;
		socket.broadcast(counter);
	});

});


server.listen(3000);
console.log('Server started on 3000');
