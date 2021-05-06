// var { expect } = require('chai');

describe('Appium Testing', () => {

    // Adding time out to make sure the app is load prior to test is run
    beforeEach(() => {
        // $("~app-root").waitForDisplayed(11000, false)
    });

    it('Share extension testing', async => {
        browser.execute("mobile: launchApp", { 'bundleId': 'com.apple.mobileslideshow' });
        driver.pause(3000);
        let selector = `type == 'XCUIElementTypeButton'`;
        let buttons = $$(`-ios predicate string:${selector}`);
        buttons[0].click();

        driver.pause(3000);
        selector = `type == 'XCUIElementTypeImage'`;
        let images = $$(`-ios predicate string:${selector}`);
        let firstImg = null
        for (var i = 0; i < images.length; i++) {
            if (images[i].getText()) {
                firstImg = images[i]
            }
        }
        if (firstImg)  {
            firstImg.click();
        }
        driver.pause(3000);

        selector = `type == 'XCUIElementTypeButton'`;
        const detailBtns = $$(`-ios predicate string:${selector}`);
        let shareBtn = null
        for (var i = 0; i < detailBtns.length; i++) {
            if (detailBtns[i].getText() === 'Share') {
                shareBtn = detailBtns[i];
            }
        }

        if (shareBtn) { 
            shareBtn.click();
        }
        driver.pause(3000);

        selector = `type == 'XCUIElementTypeCell'`;
        let shareApps = $$(`-ios predicate string:${selector}`);
        let targetApp = null
        for (var i = 0; i < shareApps.length; i++) {
            const appTitle = shareApps[i].getText();
            if (appTitle === "ExampleRNShare") {
                targetApp = shareApps[i];
            }
        }

        if (targetApp) { 
            targetApp.click();   
        }
        driver.pause(3000);

        selector = `type == 'XCUIElementTypeButton'`;
        buttons = $$(`-ios predicate string:${selector}`);
        let postBtn = null
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].getText() === 'Post') {
                postBtn = buttons[i];
            }
        }

        if (postBtn) {
            postBtn.click();
        }
        driver.pause(3000);

        const elem = $("~sharedData");
        expect(elem).toExist();
    });
});