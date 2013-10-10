'use strict';

module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-karma');

	grunt.initConfig({
		connect: {
			server: {
				options: {
					port: 3000,
					base: 'app',
					keepalive: true
				}
			}
		},
		karma: {
			runOnce: {
				configFile: 'karma.config.js'
			}
		}
	});
};
