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


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari
        // - PhantomJS
        // - IE
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                browsers: ['PhantomJS'],
                autoWatch: true,
                singleRun: false
            },
            continuous: {
                configFile: 'karma.conf.js',
                browsers: ['Chrome', 'ChromeCanary', 'Firefox', 'IE'],
                autoWatch: false,
                singleRun: true
            },
            e2e: {
                configFile: 'karma.e2e.conf.js',
                browsers: ['Chrome', 'ChromeCanary', 'Firefox', 'IE'],
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
    grunt.registerTask('e2e', ['karma:e2e']);
};