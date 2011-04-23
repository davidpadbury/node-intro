var connect = require('connect'),
		io = require('socket.io'),
		redis = require('redis'),
		redisClient = redis.createClient(),
		sublistener = redis.createClient(),
		channels = {
			counterUpdated: 'counter.updated',
			messageReceived: 'message.received'	
		};

var server = connect.createServer(
		connect.staticProvider(__dirname + '/public')
);

var socket = io.listen(server),
		updateCounter = function(change) {
			redisClient[change > 0 ? 'incr' : 'decr']('counter', function(err, res) {
				redisClient.publish(channels.counterUpdated, res);
			});
		};

sublistener.on('message', function(channel, message) {
	switch (channel) {
		case channels.counterUpdated:
			socket.broadcast(JSON.stringify({
				command: 'counter',
				arg: message
			}));	
			break;

		case channels.messageReceived:
			socket.broadcast(JSON.stringify({
				command: 'msg',
				arg: message
			}));	
			break;
	}
});

sublistener.subscribe(channels.counterUpdated);
sublistener.subscribe(channels.messageReceived);

socket.on('connection', function(client) {

	updateCounter(+1);

	client.on('disconnect', function() {
		updateCounter(-1);
	});

	client.on('message', function(msg) {
		var data = JSON.parse(msg);

		redisClient.publish(channels.messageReceived, data.arg);
	});

});


var port = parseInt(process.argv[2] || 3004, 10);
server.listen(port);
console.log('Server started on ' + port);
