import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';
describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.setWindowSize(1920, 1080)
        await browser.url("https://www.target.com/p/playstation-5-console/-/A-81114595#lnk=sametabhttps://www");
        await browser.saveScreenshot(".screenshots/PS5.png")
        
        
        await LoginPage.open();

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
});


