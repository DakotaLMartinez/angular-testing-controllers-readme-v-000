// Karma configuration
// Generated on Tue Jan 19 2016 01:52:17 GMT+0000 (GMT)

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'js/angular.js',
            'js/angular-mocks.js',
            'js/app/**/*.js',
            'tests/*.spec.js'
        ],
        exclude: [],
        preprocessors: {},
        reporters: ['spec'],
        hostname: process.env.IP,
        port: process.env.PORT,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: true,
        concurrency: Infinity
    })
}
