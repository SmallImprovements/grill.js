module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');

	grunt.initConfig({

	    less: {
			development: {
				options: {
					paths: ['style']
				},
				files: {
					'style/main.css': 'style/main.less'
				}
			}
	    },

	    watch: {
			less: {
				files: ['style/main.less'],
				tasks: ['less'],
		        options: {
					livereload: true,
					spawn: false
		        }
			},

			reload: {
				files: ['index.html', 'img/**/*'],
				tasks: [],
		        options: {
					livereload: true,
					spawn: false
		        }
			}
	    }
	});

	grunt.registerTask('default', [
		'less'
	]);

	grunt.registerTask('dev', [
		'default', 
		'watch'
	]);
}
