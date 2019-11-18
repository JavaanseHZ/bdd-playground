exports.config = {
  allScriptsTimeout: 11000,
  specs: [ '../../features/*.feature'],
  capabilities: {
    browserName: 'chrome'
  },
  SELENIUM_PROMISE_MANAGER: false,
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: ['./src/steps/**/*.steps.ts'],
    format: [
      'json:../reports/bddui.json'
    ], 
    tags: '@ui'
  },
 
  onPrepare () {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    browser.waitForAngularEnabled(false);
    browser.manage().timeouts().implicitlyWait(30000);
    browser.ignoreSynchronization = true;
  }
};