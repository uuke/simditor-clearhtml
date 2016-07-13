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

  grunt.loadNpmTasks 'grunt-contrib-sass'

  grunt.registerTask 'default', ['sass' ]
