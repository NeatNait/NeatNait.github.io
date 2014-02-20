module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browser_sync: {
        dev: {
            bsFiles: {
                src : [
                    'css/main.css',
                    '*.html',
                    'js/**/*.js'
                ]
            },
            options: {
                server: {
                    baseDir: "."
                }
            }
        }
    }
  });

  grunt.loadNpmTasks('grunt-browser-sync');

  // Default task(s).
  grunt.registerTask('default', ['browser_sync']);

};