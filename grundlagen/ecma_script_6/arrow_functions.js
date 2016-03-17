// Vanilla JavaScript
var find = function (id) {
	return function (item) {
		return item.id === id;
	};
};

var findBy = function (attributes} {
	return function (item) {
		return !Object.keys(attributes).find(function (key) {
			return item[key] !== attributes[key];
		});
	};
};

// ECMAScript 6
const find = id => item => item.id === id;
const findBy = attributes => item =>
	!Object.keys(attributes).find(attribute =>
		item[key] !== attributes[key]
	);
