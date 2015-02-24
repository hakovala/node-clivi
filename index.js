"use strict";

var Colors = require('./colors');

var names = ['black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white'];
var namesBright = names.map(function(name) { return name + 'Bright'; });

function getColorIndex(color) {
	var index = color;
	if (typeof color === 'string') {
		index = names.indexOf(color);
		if (index != -1) return index;
		index = namesBright.indexOf(color);
	}
	return index;
}

function colorize(str, colors) {
	if (typeof colors !== 'object')
		return str;

	if (typeof str !== 'string')
		throw new Error('Only strings will blend');

	var color;
	if (colors.fg) {
		if (typeof colors.fg === 'string') {
			color = Colors.standard.fg[names.indexOf(colors.fg)];
			color = color || Colors.bright.fg[namesBright.indexOf(colors.fg)];
		} else if (typeof colors.fg === 'number') {
			color = Colors.colors[colors.fg];
		}
		if (color) {
			str = color + str + Colors.reset;
		}
	}
	if (colors.bg) {
		if (typeof colors.bg === 'string') {
			color = Colors.standard.bg[names.indexOf(colors.bg)];
			color = color || Colors.bright.bg[namesBright.indexOf(colors.bg)];
		} else if (typeof colors.bg === 'number') {
			color = Colors.colors[colors.bg];
		}
		if (color) {
			str = color + str + Colors.reset;
		}
	}
	return str;
}
module.exports = colorize;
module.exports.colors = Colors;
module.exports.normal = names;
module.exports.bright = namesBright;
