module.exports = function (grunt) {
  "use strict";

  // load all grunt tasks matching the `grunt-*` pattern
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jasmine: {
      src: "src/kudos.js",
      options: {
        specs: "spec/*.js",
        vendor: "vendor/**/*.js"
      }
    },

    connect: {
      server: {
        options: {
          port: 8000,
          base: '.',
          keepalive: true
        }
      }
    },

    clean: ['dist'],

    copy: {
      dist: {
        expand: true,
        flatten: true,
        src: ['src/*', 'vendor/jquery-*'],
        dest: 'dist/'
      }
    },

    uglify: {
      dist: {
        files: {
          'dist/kudos.min.js': ['src/kudos.js']
        }
      }
    },

    cssmin: {
      css: {
        src: 'dist/kudos.css',
        dest: 'dist/kudos.min.css'
      }
    }

  })

  //grunt.loadTasks('tasks');

  // grunt.loadNpmTasks('grunt-contrib-copy')
  // grunt.loadNpmTasks('grunt-contrib-connect')
  // grunt.loadNpmTasks("grunt-contrib-jasmine")

  grunt.registerTask("test", ["jasmine"])
  grunt.registerTask("server", "connect:server")

  grunt.registerTask('default', [
    'clean',
    'test',
    'copy',
    'uglify',
    'cssmin'
  ])
};