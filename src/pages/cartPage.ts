class CartPage {
    get cartBtn () {
        return $("a#nav-cart")
    }
    get cartItemTitle () {
        return $("span.a-truncate-cut")
    }
    get cartItemPrice () {
        return $("p.a-spacing-mini > span.sc-price")
    }
    get itemDeleteMessage () {
        return $("div.sc-list-item-removed-msg > div:nth-child(1) > span.a-size-base > a")
    }
    get itemDeleteMessage2 () {
        return $("div.sc-list-item-removed-msg > div:nth-child(1) > span.a-size-base")
    }
    get itemDeleteBtn () {
        return $("span.sc-action-delete")
    }
    
    async clickDeleteItemBtn () {
        const btnD:WebdriverIO.Element = await this.itemDeleteBtn;
        await btnD.waitForDisplayed();
        await btnD.click();
    }
    async getItemDeletedMessage () {
        const item:WebdriverIO.Element = await this.itemDeleteMessage;
        await item.waitForDisplayed();
        return await item.getValue();
    }
    async getItemDeletedMessage2 () {
        const item:WebdriverIO.Element = await this.itemDeleteMessage2;
        await item.waitForDisplayed();
        return await item.getValue();
    }
    async getCartItemTitle () {
        const title:WebdriverIO.Element = await this.cartItemTitle;
        await title.waitForDisplayed();
        return await title.getText();
    }
    async getCartItemPrice () {
        const price:WebdriverIO.Element = await this.cartItemPrice;
        await price.waitForDisplayed();
        return await price.getValue();
    }
    async goToCart () {
        const cBtn:WebdriverIO.Element = await this.cartBtn;
        await cBtn.waitForDisplayed();
        await cBtn.click();
    }
}

export default new CartPage ()