module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        regarde: {
            fred: {
                files: ['DoDotNetShop.Web/App/**/**.js',
                        'DoDotNetShop.Web/Views/**/**.cshtml'],
                tasks: ['livereload']
            }
        },

        karma: {
            options: {
                configFile: 'karma.conf.js'
            },
            unit: {
                browsers: ['PhantomJS'],
                autoWatch: true,
                singleRun: false
            },
            continuous: {
                browsers: ['Chrome', 'ChromeCanary', 'Firefox'],
                autoWatch: false,
                singleRun: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-regarde');
    grunt.loadNpmTasks('grunt-contrib-livereload');
    grunt.loadNpmTasks('grunt-karma');


    grunt.registerTask('default', ['watch']);
    grunt.registerTask('watch', ['livereload-start', 'regarde']);
    grunt.registerTask('unit', ['karma:unit']);
    grunt.registerTask('ci', ['karma:continuous']);
};