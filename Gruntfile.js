module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);
	// Project configuration
	grunt.initConfig({
		//import JSON data from package.json
		pkg: grunt.file.readJSON('package.json'),
		
		//Shell Config
		//
		// We'll use this to watch PatternLab and make the magic happen
		shell: {
			patternlab: {
				command: "php core/builder.php -gp"
			}
		},
		//
		// Compass Config
		//
		// Compile any .scss files
		compass: {
			dist : {
				options: {
					config: 'source/config.rb',
					outputStyle: 'compressed'
				}
			}
		},
		// 
		// Perf budget testing!
		//
		perfbudget: {
			home: {
				options: {
					url: 'http://timkadlec.com',
					key: '81c119174fe742f7a2d778d0a505d096',
					runs: '3',
					location: 'Dulles_MotoG:Motorola G - Chrome',
					login: 'rferl',
					password: 'Reachingeveryon3!',
					budget: {
						'visualComplete': '4000'
					}
				}
			}
		},
		// uncss config
		//
		// Finds unused styles and gets rid of 'em
		uncss : {
			dist : {
				files: {
					'public/stylesheets/tidy.css': [
						'public/index.html',
						'public/me/index.html',
						'public/remembers/index.html',
						'public/talks/index.html'
					]
				},
				options: {
					report: 'min',
					compress: true,
					stylesheets: ['stylesheets/screen.css']
				}
			}
		},
		// cssmin config
		//
		// we need this to minify our uncss stuff
		cssmin : {
			dist: {
				files: [
					{src: 'public/css/style.css', dest: 'public/css/style.css'}
				]
			}
		},
		svgmin: {
			options: {

			},
			dist: {
				files: [
					{
						expand: true,
						cwd: 'source/images/',
						src: ['**/*.svg'],
						dest: 'source/images/'
					}
				]
			}
		},
		imagemin: {
			png: {
				options: {
					optimizationLevel: 7
				},
				files: [
					{
						expand: true,
						cwd: 'source/images/',
						src: ['**/*.png'],
						dest: 'source/images/',
						ext: '.png'
					}
				]
			},
			jpg: {
				options: {
					progressive: true
				},
				files: [
					{
						expand: true,
						cwd: 'source/images/',
						src: ['**/*.jpg'],
						dest: 'source/images/',
						ext: '.jpg'
					}
				]
			}
		},
		watch: {
			patternlab: {
				files: ['source/**/*.{json,mustache}','source/_data/*','source/_patternlab-files/*', 'source/images/*'],
				tasks: ['shell:patternlab'],
				options: {
					nospawn: true
				}
			},
			sass: {
				files: ['source/css/**/*.scss'],
				tasks: ['compass:dist']
			},
			svg: {
				files: ['source/images/**/*.svg'],
				tasks: ['svgmin']
			},
			images: {
				files: ['source/images/**/*.{jpg,png}'],
				tasks: ['imagemin']
			}
		}

	});

	//default task
	grunt.registerTask('default', ['compass:dist', 'shell:patternlab', 'imagemin', 'svgmin', 'uncss', 'cssmin']);
};