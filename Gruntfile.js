module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("tinyModal.json"),
		meta: {
			banner: "/*\n" +
				" *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
				" *  <%= pkg.description %>\n" +
				" *\n" +
				" *  <%= pkg.homepage %>\n" +
				" *  Demo: <%= pkg.demo %>\n" +
				" *\n" +
				" *  Author: <%= pkg.author.name %> | <%= pkg.author.twitter %>\n" +
				" *  License: <%= pkg.licenses[0].type %>\n" +
				" *  <%= pkg.licenses[0].copyright %>\n" +
				" */\n"
		},
		sass: {
			options: {      
        sass: {
          sourceMap: true
        }
      },
      main: {       
        files: {
          "dist/tinyModal.css": "src/tinyModal.scss"
        }
      }     
    },
		concat: {
			dist: {
				src: ["src/tinyModal.js"],
				dest: "dist/tinyModal.js"
			},
			options: {
				stripBanners: true,
				banner: "<%= meta.banner %>",
			}
		},
		jshint: {
			files: ["src/tinyModal.js"],
			options: {
				jshintrc: ".jshintrc"
			}
		},
		uglify: {
			my_target: {
				src: ["src/tinyModal.js"],
				dest: "dist/tinyModal.min.js"
			},
			options: {
				banner: "<%= meta.banner %>"
			}
		},
		watch: {
			options: {
				livereload: true
			},
			sass: {
				files: ['src/*.scss'],
				tasks: ['sass']
			},
		  scripts: {
				files: ['src/*.js'],
				tasks: ['uglify','concat'],
				options: {
					spawn: false
				}
			},
			html: {
				files: ['demo/*.html'],
			},
			tasks: ['default']
		}
	});

	grunt.loadNpmTasks("grunt-sass-scss");
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.registerTask("default", ["sass", "concat", "uglify"]);
	grunt.registerTask("testjs", ["jshint"]);

};
