'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        
        watch: {
            jsx : {
                files: ['public/js/src/**/*.jsx'],
                tasks: ['react']
            },
            css: {
                files: 'public/css/src/**/*.scss',
                tasks: ['compass'],
                options: {
                  livereload: true,
                }
            },    
        },
        react: {
            files: {
              expand: true,
              cwd: 'public/js/src',
              src: ['**/*.jsx'],
              dest: 'public/js/built',
              ext: '.js' 
            }
        },
        compass: {                  // Task
            dev: {                    // Another target
                options: {
                  sassDir: 'public/css/src',
                  cssDir: 'public/css/built'
                }
            }
        }
    });

    
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-react');
    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('jsx',['react']);
    grunt.registerTask('styles',['compass']);
    

};