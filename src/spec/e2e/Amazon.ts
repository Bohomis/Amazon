import SearchBarPage from "../../pages/searchBarPage";
import SearchResultPage from "../../pages/searchResultPage";
import ProductPage from "../../pages/productPage";
import CartPage from "../../pages/cartPage";
import { searchPhrase, deletedMessage } from "../../lib/words";
import { searchResultUrl } from "../../lib/url";
import { cartUrl } from "../../lib/url";

let productTitle:string = "";
let productPrice1 = "";
let productPrice2 = "";
let productTitle2 = "";
let deleteMess = "";
let deleteMess2 = "";

describe("Amazon's searchbar tests", async () => {
    it("Should open amazon home page, verify url and accept coockie", async () => {
        await SearchBarPage.openHomePage();
        await SearchBarPage.acceptCookie();
    })
    it("Should type in searchbar searchPhrase, verify searchPhrase and click search button", async () => {
        await SearchBarPage.inputType();
        await expect(await SearchBarPage.getInputValue()).toContain(searchPhrase);
        await SearchBarPage.clickSearchBtn();
        await expect(browser).toHaveUrlContaining(searchResultUrl)
    })
    it("Should verify searchPhrase and check how many results is on page (48)", async ()=> {
        await expect(await SearchResultPage.getResultTitle()).toContain(`"` + searchPhrase + `"`)
        await expect(await SearchResultPage.getNumberOfResults()).toEqual(48);
    })
    it("Should click first item", async ()=> {
        await SearchResultPage.clickOnFirstItem();
        productPrice1 = await ProductPage.getProductPrice1();
        productPrice2 = await ProductPage.getProductPrice2();
        productTitle = await ProductPage.getProductTitle();
    })
    it("Should add to cart selected item,open cart page and verify the price", async ()=> {
        await ProductPage.clickAddToCartBtn();
        await CartPage.goToCart();
        await expect(browser).toHaveUrl(cartUrl);
        productTitle2 = await CartPage.getCartItemTitle();
        await expect(await productTitle.slice(0,63) + "…").toContain(productTitle2);
    })
    it("Should delete item from cart and verify delete message", async ()=> {
        await CartPage.clickDeleteItemBtn();
    })
    
    
    
    
    
})
        


       