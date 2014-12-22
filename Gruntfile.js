module.exports = function (grunt) {
  'use strict';

  // load all grunt tasks matching the `grunt-*` pattern
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    meta: {
      banner: '/**\n' +
      ' * <%= pkg.description %>\n' +
      ' * @version v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
      ' * @link <%= pkg.homepage %>\n' +
      ' * @author <%= pkg.author.name %>\n' +
      ' * @license MIT License, http://www.opensource.org/licenses/MIT\n' +
      ' */\n'
    },

    jasmine: {
      src: 'src/kudos.js',
      options: {
        specs: 'spec/*.js',
        vendor: 'vendor/**/*.js'
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
      options: {
        banner: '<%= meta.banner %>'
      },
      dist: {
        files: {
          'dist/kudos.min.js': ['src/kudos.js'],
          'dist/kudos.firebase.min.js': ['src/kudos.firebase.js']
        }
      }
    },

    cssmin: {
      css: {
        src: 'dist/kudos.css',
        dest: 'dist/kudos.min.css'
      }
    }

  });

  grunt.registerTask('test', ['jasmine']);
  grunt.registerTask('server', 'connect:server');

  grunt.registerTask('default', [
    'clean',
    'test',
    'copy',
    'uglify',
    'cssmin'
  ]);
};