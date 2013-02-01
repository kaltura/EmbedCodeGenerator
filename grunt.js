/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    meta: {
      version: '0.1.0',
      banner: '/*! Kaltura Embed Code Generator - v<%= meta.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '* http://www.kaltura.com/\n' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
        'Ran Yefet; Licensed MIT */'
    },
    handlebars: {
      all: {
        src: 'templates',
        dest: 'lib/templates.js'
      }
    },
    concat: {
      dist: {
        src: [
          '<banner:meta.banner>', 
          'lib/handlebars.runtime.js', 
          'lib/handlebars.helpers.js',
          'lib/templates.js', 
          'lib/utils.js',
          'lib/EmbedCodeGenerator.js'
        ],
        dest: 'dist/KalturaEmbedCodeGenerator.js'
      }
    },
    min: {
      dist: {
        src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
        dest: 'dist/KalturaEmbedCodeGenerator.min.js'
      }
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint qunit'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {}
    },
    uglify: {}
  });

  // Add handlebars plugin
  grunt.loadNpmTasks('grunt-handlebars');
  // Default task.
  grunt.registerTask('default', 'handlebars concat min');

};
