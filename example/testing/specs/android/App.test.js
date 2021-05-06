describe('Appium Testing', () => {

    // Adding time out to make sure the app is load prior to test is run
    beforeEach(() => {
        // $("~app-root").waitForDisplayed(11000, false)
    });

    it('Share extension testing', async => {
        driver.startActivity("com.sec.android.gallery3d", "com.samsung.android.gallery.app.activity.GalleryActivity");
        driver.pause(3000);
        driver.touchAction([{ action: 'longPress', x: 200, y: 1500 }, 'release']);
        driver.pause(3000);
        driver.touchAction([{ action: 'press', x: 256, y: 2700 }, 'release']);
        driver.pause(3000);
        const selector = 'new UiSelector().text("ExampleRNShare")'
        const Button = $(`android=${selector}`)
        Button.click()

        driver.pause(3000);

        const elem = $("~sharedData");
        expect(elem).toExist();
    });
});