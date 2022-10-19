class ProductPage {
    get productTitle () {
        return $("span#productTitle")
    }
    get productPrice1 () {
        return $("div#corePrice_feature_div > div.a-section  > span.a-price >span:nth-child(2) > span")
    }
    get productPrice2 () {
        return $("div#corePrice_feature_div > div.a-section  > span.a-price >span:nth-child(2) > span:nth-child(2)")
    }
    get addToCartBtn () {
        return $("input#add-to-cart-button")
    }
    async clickAddToCartBtn () {
        const atcBtn:WebdriverIO.Element = await this.addToCartBtn;
        await atcBtn.waitForDisplayed();
        await atcBtn.click();
    }
    async getProductPrice2 () {
        const pri2:WebdriverIO.Element = await this.productPrice2;
        await pri2.waitForDisplayed();
        return await pri2.getValue();
    }
    
    async getProductTitle () {
        const tit:WebdriverIO.Element = await this.productTitle;
        await tit.waitForDisplayed();
        return await tit.getText()
    }
    async getProductPrice1 () {
        const pri:WebdriverIO.Element = await this.productPrice1;
        await pri.waitForDisplayed();
        return await pri.getValue();
    }

}

export default new ProductPage