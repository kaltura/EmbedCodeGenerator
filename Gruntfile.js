/*global module:false*/
module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    meta: {
      banner:
        "/*! Kaltura Embed Code Generator - v<%= pkg.version %> - " +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        "* https://github.com/kaltura/EmbedCodeGenerator\n" +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> Kaltura Inc. */',
    },
    handlebars: {
      compile: {
        options: {
          namespace: "Handlebars.templates",
        },
        files: {
          "lib/templates.js": "templates/*",
        },
      },
    },
    concat: {
      options: {
        banner: "<%= meta.banner %>",
      },
      dist: {
        src: [
          "lib/handlebars.runtime-v4.7.7.js",
          "lib/handlebars.helpers.js",
          "lib/templates.js",
          "lib/utils.js",
          "lib/EmbedCodeGenerator.js",
        ],
        dest: "dist/<%= pkg.config.distFilename %>.js",
      },
    },
    uglify: {
      options: {
        banner: "<%= meta.banner %>",
      },
      dist: {
        files: {
          "dist/<%= pkg.config.distFilename %>.min.js": [
            "<%= concat.dist.dest %>",
          ],
        },
      },
    },
  });

  // Add grunt plugins
  grunt.loadNpmTasks("grunt-contrib-handlebars");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  // Default task.
  grunt.registerTask("default", ["handlebars", "concat", "uglify:dist"]);
};
