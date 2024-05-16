import Page from './page';

const framePayment: string = '//*[@name="stripe_checkout_app"]'

const header: string = '//*[@class="row justify-content-center"]/h2'
const items: string = '//*[@class="table table-striped"]/tbody/tr/td';
const totalPrice: string = '//*[@class="justify-content-center h4 top-space-20"]'
const payBtn: string = '//*[@class="stripe-button-el"]';
const emailInput: string = '//*[@id="email"]';
const cardInput: string = '//*[@id="card_number"]';
const dateInput: string = '//*[@id="cc-exp"]';
const cvcInput: string = '//*[@id="cc-csc"]';
const approvePayBtn: string = '//*[@id="submitButton"]';


export class CheckoutPage extends Page {
    constructor(page: Page['page']) {
        super(page);
    }

    async getHeader() {
        return await super.getElement(header);
    }

    async getItems() {
        return await super.getElementsArray(items);
    }

    async getTotalPrice() {
        return await super.getElement(totalPrice);
    }

    async getPayBtn() {
        return await super.getElement(payBtn);
    }

    async clickPayBtn() {
        await super.clickElement(payBtn);
    }

    async clickApprovePayBtn() {
        await super.clickFrameElement(framePayment,approvePayBtn);
    }

    async fillEmailInput(email: string) {
        await super.fillFrameElement(framePayment, emailInput, email);
    }

    async fillCardInput(card: string) {
        await super.fillFrameElement(framePayment, cardInput, card);
    }

    async fillDateInputr(date: string) {
        await super.fillFrameElement(framePayment, dateInput, date);
    }

    async fillCvcInput(cvc: string) {
        await super.fillFrameElement(framePayment, cvcInput, cvc);
    }
}