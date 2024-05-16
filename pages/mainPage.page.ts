import Page from './page';

const header: string = '//*[@class="row justify-content-center"]/h2';
const temperature: string = '//*[@id="temperature"]';
const buyMoisturizersBtn: string = '//*[@href="/moisturizer"]/button';
const buySunscreensBtn: string = '//*[@href="/sunscreen"]/button';

export class MainPage extends Page {
    constructor(page: Page['page']) {
        super(page);
    }

    async getHeader() {
        return await super.getElement(header);
    }

    async getTemperature() {
        return await super.getElement(temperature);
    }

    async getTemperatureText() {
        return await super.getElementText(temperature);
    }

    async clickBuyMoisturizersBtn() {
        await super.clickElement(buyMoisturizersBtn);
    }

    async clickBuySunscreensBtn() {
        await super.clickElement(buySunscreensBtn);
    }
}
