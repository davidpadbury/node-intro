var express = require('express'),
		highcharts = require('./lib/node-highcharts'),
		chart = require('./public/chart.js'),
		server = express.createServer();

server.configure(function() {
		server.use( express.static(__dirname + '/public') );
		server.use( express.errorHandler({ showStack: true, dumpExceptions: true }));
		server.set('view engine', 'ejs');
		server.set('view options', { layout: false });
});

server.get('/', function(req, res) {
		res.render('index', {
				locals: {
					data: req.query.d
				}
		});
});

server.get('/graph.png', function(req, res) {
		var data = req.query.d,
			options = chart.createChartOptions( data );

		highcharts.render(options, function(err, data) {
			if (err) {
				res.send(500, {'Content-Type': 'text/plain'}, err.message);
			} else {
				res.writeHead(200, {
					'Content-Type': 'image/png',
					'Content-Length': data.length
				});
				res.end( data );
			}
		});
});

server.listen(3001);
console.log('server listening on 3001');
