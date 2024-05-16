import Page from './page';

const header: string = '//*[@class="row justify-content-center"]/h2';
const itemNames: string = '//*[@class="text-center col-4"]/p[@class]';
const itemPrices: string = '//*[@class="text-center col-4"]/p[not(@class)]';
const itemBtns: string = '//*[@class="text-center col-4"]/button';
const cartBtn: string = '//*[@onclick="goToCart()"]';
const cartItemsEmount: string = '//*[@id="cart"]'

export class ItemsPage extends Page {
    constructor(page: Page['page']) {
        super(page);
    }
     
    async getHeader() {
        return await super.getElement(header);
    }

    async getItemNames() {
        return await super.getElementsArray(itemNames);
    }

    async getItemPrices() {
        return await super.getElementsArray(itemPrices);
    }
    
    async getItemBtns() {
        return await super.getElementsArray(itemBtns);
    }

    async getItemBtnByIndex(index: number) {
        return await super.getElementByIndex(itemBtns, index);
    }

    async clickItemBtnByIndex(index: number) {
        await super.clickElementByIndex(itemBtns, index);
    }

    async clickCartBtn() {
        await super.clickElement(cartBtn);
    }

    async getCartItemsEmount() {
        return await super.getElement(cartItemsEmount);
    }
}