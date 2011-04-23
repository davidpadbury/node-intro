var zombie = require('zombie');

zombie.visit('http://www.davidpadbury.com', function(err, browser, status) {
	console.log( 'visited');
	console.log(err);
});
