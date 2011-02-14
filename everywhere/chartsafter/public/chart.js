(function(global) {

 	function parseData(data) {
		var items = data.split(','),
			arr = [];

		for (var i = 0; i < items.length; i++) {
			try {
				var v = parseFloat(items[i]);
				arr.push(v);
			} catch (e) {
				// Failed to parse, just ignore..
			}
		}

		return arr;
	}

	global.createChartOptions = function(data) {
		var values = parseData(data);

		return {
			chart: {
				defaultSeriesType: 'column',
				width: 300,
				height: 300
			},
			legend: {
				enabled: false
			},
			title: {
				text: 'Hey CodeCamp!'
			},
			series: [{
				data: values,
				name: 'Number'
			}]
		};
	}

})(window.demo || (window.demo = {}));
