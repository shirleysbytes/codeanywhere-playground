import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';
describe('Scrape', () => {
    before( async () => {
        await browser.setWindowSize(1920, 1080)
    })

    const targets = [
        {store: "Target", url: "https://www.target.com/p/playstation-5-console/-/A-81114595#lnk=sametab"}, 
        {store: "Newegg", url: "https://www.newegg.com/p/N82E16868110300"},
        // {store: "BestBuy", url: "https://www.bestbuy.com/site/sony-playstation-5-console/6426149.p?skuId=6426149"}
    ]

    targets.forEach((target) => {
        it(`Should load ${target.store}`, async () => {
            await browser.url(target.url)
            await browser.saveScreenshot(`./screenshots/${target.store}.png`)
        })
    })
});


