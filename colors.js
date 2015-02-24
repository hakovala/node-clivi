"use strict";

var colors = {
	fg: Array.apply(null, new Array(256)).map(function(_, i) { return '\x1b[;38;5;' + i + 'm'; }),
	bg:	Array.apply(null, new Array(256)).map(function(_, i) { return '\x1b[;48;5;' + i + 'm'; }),
};

function rgbValueOf(colors, r, g, b) {
	return colors[36 * r + 6 * g + b];
}

module.exports = {
	colors: colors,
	standard: {
		fg: colors.fg.slice(0, 8),
		bg: colors.bg.slice(0, 8),
	},
	bright: {
		fg: colors.fg.slice(8, 16),
		bg: colors.bg.slice(8, 16),
	},
	rgb: {
		fg: colors.fg.slice(16, 232),
		bg: colors.bg.slice(16, 232),
	},
	gray: {
		fg: colors.fg.slice(232, 256),
		bg: colors.bg.slice(232, 256),
	},
	reset: '\x1b[0m',
	names: []
};

module.exports.rgb.fg.valueOf = function(r, g, b) {
	return rgbValueOf(module.exports.rgb.fg);
};

module.exports.rgb.bg.valueOf = function(r, g, b) {
	return rgbValueOf(module.exports.rgb.bg);
};
