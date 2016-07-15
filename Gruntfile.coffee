module.exports = (grunt) ->

  grunt.initConfig

    pkg: grunt.file.readJSON 'package.json'
    name: "simditor-clearhtml"

    sass:
      styles:
        options:
          style: 'expanded'
          sourcemap: 'none'
          bundleExec: true
        files:
          'styles/<%= name %>.css': 'styles/<%= name %>.scss'

    umd:
      all:
        src: 'lib/<%= name %>.js'
        template: 'umd.hbs'
        amdModuleId: '<%= pkg.name %>'
        objectToExport: 'SimditorClearHtml'
        globalAlias: 'SimditorClearHtml'
        deps:
          'default': ['$', 'Simditor']
          amd: ['jquery', 'simditor']
          cjs: ['jquery', 'simditor']
          global:
            items: ['jQuery', 'Simditor']
            prefix: ''

    watch:
      styles:
        files: ['styles/*.scss']
        tasks: ['sass']
      src:
        files: ['src/**/*.coffee']
        tasks: ['coffee:src', 'umd']
      jasmine:
        files: ['lib/**/*.js', 'spec/**/*.js']
        tasks: 'jasmine'

    jasmine:
      test:
        src: ['lib/**/*.js']
        options:
          outfile: 'spec/index.html'
          specs: 'spec/<%= name %>-spec.js'
          styles: 'styles/<%= name %>.css'
          vendor: [
            'bower_components/jquery/dist/jquery.min.js'
            'bower_components/simple-module/lib/module.js'
            'bower_components/simple-hotkeys/lib/hotkeys.js'
            'bower_components/simditor/lib/simditor.js'
          ]

  grunt.loadNpmTasks 'grunt-contrib-sass'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-jasmine'
  grunt.loadNpmTasks 'grunt-umd'

  grunt.registerTask 'default', ['sass', 'umd', 'jasmine', 'watch']
  grunt.registerTask 'test', ['sass', 'umd', 'jasmine']
