var jsdom = require('jsdom'),
		window = jsdom.jsdom().createWindow(),
		document = window.document,
		htmlEl = document.getElementsByTagName('html')[0];

jsdom.jQueryify(window, function() {
		var $ = window.jQuery;
		
		$('<div />').addClass('servermade').appendTo('body');

		$('.servermade').text('And selectors work fine!');

		console.log( htmlEl.outerHTML );
});
