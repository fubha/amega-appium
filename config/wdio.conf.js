const capabilities = {
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:deviceName': 'Android',
  'appium:app': '/Users/burney/downloads/app.apk'
};

export const config = {
    runner: 'local',
    hostname: process.env.APPIUM_HOST || 'localhost',
    port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
    logLevel: 'info',
    capabilities,
    specs: [
        '../tests/**/*.spec.js'
    ],
    onPrepare: function (config, capabilities) {
    },
    framework: 'mocha'
};