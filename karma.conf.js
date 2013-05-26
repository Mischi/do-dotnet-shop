// karma configuration


// base path, that will be used to resolve files and exclude
basePath = 'DoDotNetShop.Web';


// list of files / patterns to load in the browser
files = [
  JASMINE,
  JASMINE_ADAPTER,
  'Scripts/angular-1.1.6-b8ea7f6/angular.js',
  'Scripts/angular-1.1.6-b8ea7f6/angular-mocks.js',
  'Scripts/angular-1.1.6-b8ea7f6/angular-resource.js',
  'App/ShopBackend/shopBackend.js',
  'App/**/*.js',
];


preprocessors = {
    '**/App/ShopBackend/controllers.js': 'coverage',
    '**/App/ShopBackend/shopBackend.js': 'coverage',
    '**/App/resources.js': 'coverage',
};


// list of files to exclude
exclude = [
    'App/ShopBackend/Scenarios/*.js',
];


// test results reporter to use
// possible values: dots || progress
reporters = ['coverage', 'progress'];

coverageReporter = {
    type: 'html',
    dir: '../js-coverage'
};

// web server port
port = 8080;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;