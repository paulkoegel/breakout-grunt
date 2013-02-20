module.exports = (grunt) ->
  grunt.initConfig
    clean: ["./dist"]
    haml:
      index:
        src: "source/index.haml"
        dest: "dist/index.html"

    coffee:
      # # legacy examples: https://github.com/gruntjs/grunt-contrib-coffee/tree/cb093f429ddcd446636cc8229b248157693d4bb6
      # flatten:
      #   options:
      #     flatten: true

      #   files:
      #     "dist/javascripts/*.js": ["source/javascripts/**/*.coffee"] # compile individually into dest, flattening folder structure

      glob_to_multiple:
        expand: true,
        cwd: './',
        src: ['source/javascripts/*.coffee'],
        dest: 'dist/javascripts',
        ext: '.js'

  grunt.loadNpmTasks "grunt-contrib-clean"
  grunt.loadNpmTasks "grunt-haml"
  grunt.loadNpmTasks "grunt-contrib-coffee"
  grunt.registerTask "default", ["clean", "haml", "coffee"]
