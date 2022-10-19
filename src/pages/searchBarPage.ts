import { homeUrl } from "../lib/url";
import { searchPhrase } from "../lib/words";

class SearchBarPage {
    async openHomePage () {
        await browser.url(homeUrl);
        await expect(browser).toHaveUrlContaining(homeUrl);
    }
    get cookieBtn () {
        return $("input#sp-cc-accept")
    }
    get searchBarInput2 () {
        return $("div.nav-fill > div.nav-search-field ")
    }
    get searchBarInput () {
        return $("input#twotabsearchtextbox")
    }
    get searchBtn () {
        return $("input#nav-search-submit-button")
    }
    async inputType () {
        const inp:WebdriverIO.Element = await this.searchBarInput;
        await inp.waitForDisplayed();
        await inp.setValue(searchPhrase);
    }
    async clickSearchBtn () {
        const btn:WebdriverIO.Element = await this.searchBtn;
        await btn.waitForDisplayed();
        await btn.click()
    }
    
    
    async getInputValue () {
        const inp3:WebdriverIO.Element = await this.searchBarInput;
        await inp3.waitForDisplayed();
        return await inp3.getValue();
    }
    async acceptCookie () {
        const cookieBtn:WebdriverIO.Element = await this.cookieBtn;
        await cookieBtn.waitForDisplayed();
        await cookieBtn.click()
    }
}

export default new SearchBarPage ()  
        

     