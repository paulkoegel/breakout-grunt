module.exports = function(grunt) {
  grunt.initConfig({
    clean: ['dist/**/*'],

    haml: {
      index: {
        src: "source/index.haml",
        dest: "dist/index.html"
      }
    },

    coffee: {
      // legacy examples: https://github.com/gruntjs/grunt-contrib-coffee/tree/cb093f429ddcd446636cc8229b248157693d4bb6
      flatten: {
        options: {
          flatten: true
        },
        files: {
          'dist/javascripts/*.js': ['source/javascripts/**/*.coffee'] // compile individually into dest, flattening folder structure
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-haml');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  return grunt.registerTask('default', ['clean', 'haml', 'coffee']);
};
