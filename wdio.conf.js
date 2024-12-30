const path = require('path')

exports.config = {
  runner: 'local',
  path: '/',
  host: '127.0.0.1',
  port: 4723, // Specify the port you want Appium to use
  specs: ['./test/specs/**/sample.js'],
  exclude: [],
  maxInstances: 10,
  capabilities: [
    {
      platformName: 'Android',
      'appium:deviceName': 'Pixel 4',
      'appium:platformVersion': '14.0',
      'appium:automationName': 'UIAutomator2',
      'appium:app': path.join(
        process.cwd(),
        'androidApp/[Staging] Financfy.apk'
      ),
      'appium:autoGrantPermissions': true,
      'appium:chromedriverAutodownload': true,
    },
  ],
  logLevel: 'info',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },
  services: ['appium'], // This will manage the Appium server for you
  appium: {
    command: 'appium.cmd', // Ensure Appium is correctly referenced on Windows
    args: {
      port: 4723, // Specify the port Appium should run on
      relaxedSecurity: true,
    },
  },
  // Remove the manual start/stop logic since Appium service takes care of it
  beforeSession: async function (config, capabilities) {
    console.log(
      'Before session: Appium server will start automatically via the service.'
    )
  },
  afterSession: async function (config, capabilities, result) {
    console.log(
      'After session: Appium server will stop automatically via the service.'
    )
  },
}
