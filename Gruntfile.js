'use strict';
module.exports = function (grunt) {
	grunt.initConfig({
		newlineBr: {
			test: {
				files: {
					'test/tmp/fixture.txt': 'test/fixture.txt'
				}
			}
		},
		clean: {
			test: [
				'test/tmp/**'
			]
		}
	});

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('default', ['clean', 'newlineBr']);
};
