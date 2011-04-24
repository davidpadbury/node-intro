var cluster = require('cluster'),
		live = require('cluster-live');

cluster('app')
	.use(cluster.debug())
	.use(cluster.stats({ connections: true, lightRequests: true }))
	.use(live())
	.listen(3005);
