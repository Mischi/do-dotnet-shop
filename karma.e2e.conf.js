// karma configuration


// base path, that will be used to resolve files and exclude
basePath = 'DoDotNetShop.Web';


// list of files / patterns to load in the browser
files = [
  ANGULAR_SCENARIO,
  ANGULAR_SCENARIO_ADAPTER,
  'App/ShopBackend/Scenarios/shopBackend.scenarios.js'
];


// list of files to exclude
exclude = [

];


// test results reporter to use
// possible values: dots || progress
reporters = ['progress'];

urlRoot = '/_karma_/',

proxies = {
    '/': 'http://localhost:50219/'
};


// cli runner port
runnerPort = 9101;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;