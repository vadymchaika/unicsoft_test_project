import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/mainPage.page';
import { ItemsPage } from '../pages/items.page';
import { CheckoutPage } from '../pages/checkout.page';
import { ConfirmationPage } from '../pages/confirmation.page';
import cardData from '../fixtures/card_numbers.json';

let mainPage: MainPage;
let itemsPage: ItemsPage;
let checkoutPage: CheckoutPage;
let confirmationPage: ConfirmationPage;

test.describe('Task 1', () => {
    test.beforeEach(async ({ page }) => {
        mainPage = new MainPage(page);
        itemsPage = new ItemsPage(page);
        checkoutPage = new CheckoutPage(page);
        confirmationPage = new ConfirmationPage(page);
        await mainPage.openUrl();
        await expect(await mainPage.getHeader()).toHaveText('Current temperature');
    });

    test('Buy item related to the current temperature', async ({page}) => {
        await expect(await mainPage.getTemperature()).toBeVisible();
        let temperature = await mainPage.getTemperatureText();
        
        let highestPrice = 0;
        if (Number(temperature?.replace(/\D/g,'')) < 19) {
            await mainPage.clickBuyMoisturizersBtn();
            await expect(await itemsPage.getHeader()).toHaveText('Moisturizers');
            await page.waitForLoadState()
            const itemNames = await itemsPage.getItemNames();
            const itemPrices = await itemsPage.getItemPrices();
            let lowestPriceAloe = 0;
            let lowestPriceAlmond = 0;
            let pointerAloe = 0;
            let pointerAlmond = 0;
            for (let i of itemPrices) {
                let text = await i.textContent();
                let price = Number(text?.replace(/\D/g,''));
                if (price > highestPrice) highestPrice = price;
            }
            lowestPriceAloe = highestPrice;
            lowestPriceAlmond = highestPrice;
            for (let i = 0; i < itemNames.length; i++) {
                let itemName = await itemNames[i].textContent();
                if (itemName?.toLowerCase().includes("aloe")) {
                    let text = await itemPrices[i].textContent();
                    let price = Number(text?.replace(/\D/g,''));
                    if (price < lowestPriceAloe) {
                        lowestPriceAloe = price;
                        pointerAloe = i;
                    }
                }
                if (itemName?.toLowerCase().includes("almond")) {
                    let text = await itemPrices[i].textContent();
                    let price = Number(text?.replace(/\D/g,''));
                    if (price < lowestPriceAlmond) {
                        lowestPriceAlmond = price;
                        pointerAlmond = i;
                    }
                }
            }
            await expect(await itemsPage.getItemBtnByIndex(pointerAloe)).toBeVisible();
            await itemsPage.clickItemBtnByIndex(pointerAloe);
            await expect(await itemsPage.getCartItemsEmount()).toContainText("1");
            await expect(await itemsPage.getItemBtnByIndex(pointerAlmond)).toBeVisible();
            await itemsPage.clickItemBtnByIndex(pointerAlmond);
            await expect(await itemsPage.getCartItemsEmount()).toContainText("2");
            let aloeItemName = await itemNames[pointerAloe].textContent();
            let almonItemName = await itemNames[pointerAlmond].textContent();
            let itemNamesArray = [aloeItemName, almonItemName];
            let itemPricesArray = [String(lowestPriceAloe), String(lowestPriceAlmond)];
            await itemsPage.clickCartBtn();
            await expect(await checkoutPage.getHeader()).toHaveText('Checkout');
            let checkoutItems = await checkoutPage.getItems();
            let k = 0;
            let j = 0;
            for (let i = 0; i < checkoutItems.length; i++) {
                if (i % 2 === 0) {
                    await expect(checkoutItems[i]).toHaveText(itemNamesArray[k] || "");
                    k++;
                }
                else {
                    await expect(checkoutItems[i]).toHaveText(itemPricesArray[j] || "");
                    j++;
                }
            }
            let totalPrice = itemPricesArray.reduce((a,b) => a + Number(b), 0);
            await expect(await checkoutPage.getTotalPrice()).toContainText(String(totalPrice));
        }
        else if (Number(temperature?.replace(/\D/g,'')) > 34) {
            await mainPage.clickBuySunscreensBtn();
            await expect(await itemsPage.getHeader()).toHaveText('Sunscreens');
            await page.waitForLoadState()
            const itemNames = await itemsPage.getItemNames();
            const itemPrices = await itemsPage.getItemPrices();
            let lowestPriceSPF50 = 0;
            let lowestPriceSPF30 = 0;
            let pointerSPF50 = 0;
            let pointerSPF30 = 0;
            for (let i of itemPrices) {
                let text = await i.textContent();
                let price = Number(text?.replace(/\D/g,''));
                if (price > highestPrice) highestPrice = price;
            }
            lowestPriceSPF50 = highestPrice;
            lowestPriceSPF30 = highestPrice;
            for (let i = 0; i < itemNames.length; i++) {
                let itemName = await itemNames[i].textContent();
                if (itemName?.toLowerCase().includes("spf-50")) {
                    let text = await itemPrices[i].textContent();
                    let price = Number(text?.replace(/\D/g,''));
                    if (price < lowestPriceSPF50) {
                        lowestPriceSPF50 = price;
                        pointerSPF50 = i;
                    }
                }
                if (itemName?.toLowerCase().includes("spf-30")) {
                    let text = await itemPrices[i].textContent();
                    let price = Number(text?.replace(/\D/g,''));
                    if (price < lowestPriceSPF30) {
                        lowestPriceSPF30 = price;
                        pointerSPF30 = i;
                    }
                }
            }
            await expect(await itemsPage.getItemBtnByIndex(pointerSPF50)).toBeVisible();
            await itemsPage.clickItemBtnByIndex(pointerSPF50);
            await expect(await itemsPage.getCartItemsEmount()).toContainText("1");
            await expect(await itemsPage.getItemBtnByIndex(pointerSPF30)).toBeVisible();
            await itemsPage.clickItemBtnByIndex(pointerSPF30);
            await expect(await itemsPage.getCartItemsEmount()).toContainText("2");
            let spf50ItemName = await itemNames[pointerSPF50].textContent();
            let spf30ItemName = await itemNames[pointerSPF30].textContent();
            let itemNamesArray = [spf50ItemName, spf30ItemName];
            let itemPricesArray = [String(lowestPriceSPF50), String(lowestPriceSPF30)];
            await itemsPage.clickCartBtn();
            await expect(await checkoutPage.getHeader()).toHaveText('Checkout');
            let checkoutItems = await checkoutPage.getItems();
            let k = 0;
            let j = 0;
            for (let i = 0; i < checkoutItems.length; i++) {
                if (i % 2 === 0) {
                    await expect(checkoutItems[i]).toHaveText(itemNamesArray[k] || "");
                    k++;
                }
                else {
                    await expect(checkoutItems[i]).toHaveText(itemPricesArray[j] || "");
                    j++;
                }
            }
            let totalPrice = itemPricesArray.reduce((a,b) => a + Number(b), 0);
            await expect(await checkoutPage.getTotalPrice()).toContainText(String(totalPrice));
        }
        await expect(await checkoutPage.getPayBtn()).toBeVisible()
        await checkoutPage.clickPayBtn();
        let randomEmail = "test" + Math.random().toString().substr(2, 8) + '@email.com';
        await checkoutPage.fillEmailInput(randomEmail);
        await checkoutPage.fillCardInput(cardData.cardNumber);
        await checkoutPage.fillDateInputr(cardData.date);
        await checkoutPage.fillCvcInput(cardData.cvc);
        await checkoutPage.clickApprovePayBtn();
        try {
            await expect(await confirmationPage.getHeader()).toHaveText('PAYMENT SUCCESS');
        }
        catch {
            throw new Error ("Payment was failed");
        }
    })
})