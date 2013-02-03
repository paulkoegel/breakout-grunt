module.exports = function(grunt) {
  grunt.initConfig({
    clean: ['dist/**/*'],
    coffee: {
      // legacy examples: https://github.com/gruntjs/grunt-contrib-coffee/tree/cb093f429ddcd446636cc8229b248157693d4bb6
      // compile: {
      //   files: {
      //     'dist/javascripts/hello.js': 'source/javascripts/hello.coffee'
      //   }
      // },
      flatten: {
        options: {
          flatten: true
        },
        files: {
          'dist/javascripts/*.js': ['source/javascripts/**/*.coffee'] // compile individually into dest, flattening folder structure
        }
      }
      // glob_to_multiple: {
      //   expand: true,
      //   cwd: 'source/javascripts/',
      //   src: ['**/*.coffee'],
      //   dest: 'dist/javascripts/',
      //   ext: '.js'
      // }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  return grunt.registerTask('default', ['clean', 'coffee']);
};
