import Page from './page';

const header: string = '//*[@class="row justify-content-center"]/h2';

export class ConfirmationPage extends Page {
    constructor(page: Page['page']) {
        super(page);
    }

    async getHeader() {
        return await super.getElement(header);
    }
}