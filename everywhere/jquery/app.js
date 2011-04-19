var jsdom = require('jsdom'),
		window = jsdom.jsdom().createWindow(),
		document = window.document,
		htmlEl = document.getElementsByTagName('html')[0];

jsdom.jQueryify(window, 'http://code.jquery.com/jquery-latest.js', function() {
		var $ = window.jQuery;
		
		$('<div />').addClass('servermade').appendTo('body');

		$('.servermade').text('And selectors work fine!');

		console.log( htmlEl.outerHTML );
});
