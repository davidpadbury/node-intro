var connect = require('connect'),
		io = require('socket.io');

var server = connect.createServer(
		connect.staticProvider(__dirname + '/public')
);

var socket = io.listen(server),
		counter = 0,
		updateCounters = function() {
			socket.broadcast(JSON.stringify({
				command: 'counter',
				arg: counter
			}));	
		};

socket.on('connection', function(client) {

	counter = counter + 1;
	updateCounters();

	client.on('disconnect', function() {
		counter = counter - 1;
		updateCounters();
	});

	client.on('message', function(msg) {
		socket.broadcast(msg);
	});

});


server.listen(3000);
console.log('Server started on 3000');
