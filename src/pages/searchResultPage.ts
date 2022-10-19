import { searchPhrase } from "../lib/words";

class SearchResultPage {
    get numberOfResults () {
        return $$("div.sg-col-4-of-12[data-component-type='s-search-result']")
    }
    get resultsTitle () {
        return $("div.a-section > span.a-color-state")
    }
    get item () {
        return $("div.sg-col-4-of-12[data-component-type='s-search-result']:nth-child(2)")
    }
    async clickOnFirstItem () {
        const itm:WebdriverIO.Element = await this.item;
        await itm.waitForDisplayed();
        await itm.click();

    }
    async getNumberOfResults () {
        const res:WebdriverIO.ElementArray = await this.numberOfResults;
        return await res.length
    }
    async getResultTitle () {
        const title:WebdriverIO.Element = await this.resultsTitle;
        return await title.getText();
    }
}
export default new SearchResultPage ()    
       
      
          
    
            
        
    
    