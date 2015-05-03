'use strict';
var newlineBr = require('newline-br');

module.exports = function (grunt) {
	grunt.registerMultiTask('newlineBr', 'Prepends newlines with a <br> tag', function () {
		this.files.forEach(function (el) {
			var src = el.src[0];
			var out = newlineBr(grunt.file.read(src));
			grunt.file.write(el.dest, out);
		});
	});
};
