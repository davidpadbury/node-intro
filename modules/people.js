// people.js
function Person(name) {
	this.name = name;
}

Person.prototype = {
	sayHi: function() {
		console.log("Hi, I'm " + this.name);
	}
}

exports.createPerson = function(name) {
	return new Person(name);
};
