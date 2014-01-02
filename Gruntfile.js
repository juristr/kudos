module.exports = function (grunt) {
  "use strict";
 
  
 
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
    }
  })
 
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks("grunt-contrib-jasmine")

  grunt.registerTask("test", ["jasmine"])
  grunt.registerTask("server", "connect:server")
};