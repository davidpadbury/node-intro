var cluster = require('cluster');

cluster('app')
	.use(cluster.debug())
	.listen(3000);

