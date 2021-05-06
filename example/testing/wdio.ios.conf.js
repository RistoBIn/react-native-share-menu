exports.config = {
    runner: 'local',
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    region: 'eu',
    specs: [
        './specs/ios/*.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 1,
        platformName: 'iOS',
        deviceName: 'iPhone 11',
        platformVersion: '14.5',
        automationName: 'XCUITest',
        app: 'storage:02f920b8-ca7b-447f-a945-1c6f6e4d8070',
        sauceLabsImageInjectionEnabled: true,
        // 'browserstack.uploadMedia': ['media://21d66a8a0471097bbf5789330129e9ab97e467e3']
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
        timeout: 120000
    }
}
