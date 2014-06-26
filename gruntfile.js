module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.initConfig({

	    less: {
	      development: {
	        options: {
	          paths: ['src/style']
	        },
	        files: {
	          "dist/style.css": "src/style/main.less"
	        }
	      }
	    },

	    watch: {
			less: {
				files: ['src/style/main.less'],
				tasks: ['less'],
		        options: {
					livereload: true,
					spawn: false
		        }
			},
			copy: {
				files: ['index.html', 'src/img/**/*'],
				tasks: ['copy'],
		        options: {
					livereload: true,
					spawn: false
		        }
			}
	    },

		copy: {
			index: {
				src: 'index.html',
				dest: 'dist/index.html'
			},
			img: {
				src: 'src/img/**/*',
				dest: 'dist/'
			},
			fonts: {
				src: 'src/fonts/**/*',
				dest: 'dist/'
			},
			favicon: {
				src: 'src/favicon.*',
				dest: 'dist/'
			}
		}
	});

	grunt.registerTask('default', [
		'less', 
		'copy'
	]);

	grunt.registerTask('dev', [
		'default', 
		'watch'
	]);
}
