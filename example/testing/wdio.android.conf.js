exports.config = {
    runner: 'local', 
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    region: 'eu',
    specs: [
        './specs/android/*.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 1,
        platformName: 'Android',
        deviceName: 'Samsung Galaxy S10',
        platformVersion: '11',
        automationName: 'UiAutomator2',
        sauceLabsImageInjectionEnabled: true,
        app: 'storage:c3a34f39-7fa4-4a54-ac9b-a4ddbc3ae065',
        autoGrantPermissions: true
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://ondemand.us-west-1.saucelabs.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}
