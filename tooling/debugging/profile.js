var profiler = require('v8-profiler'),
		stdin = process.openStdin();

var person = {
	name: 'William'
}, bigNumber = 1000000 * 100;

function dotAccess() {
	var name, i;
		
	for (i = 0; i < bigNumber; i++) {
		name = person.name;
	}

	return name;
}

function indexedAccess() {
	var	name, i;
		
	for (i = 0; i < bigNumber; i++) {
		name = person['name'];
	}

	return name;
}

stdin.on('data', function() {
	console.log('profiling dot access');
	profiler.startProfiling('dot access');
	dotAccess();
	profiler.stopProfiling('dot access');

	console.log('profiling indexed access');
	profiler.startProfiling('indexed access');
	indexedAccess();
	profiler.stopProfiling('indexed access');
	console.log('done');
});
