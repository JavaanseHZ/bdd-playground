import { Before, Given, Then, When } from 'cucumber';
import { AppPage } from '../pages/app.po';

let page: AppPage;

let chai = require('chai');
chai.use(require('chai-as-promised'));
chai.use(require('chai-match'));
let expect = chai.expect;
let assert = chai.assert

Before(async () => {
  page = new AppPage();
  await page.navigateTo();
});

When('ich einen Wohnort auswählen möchte', async () => {
    return await 'ok';
});

Then('soll mir eine Liste von Wohnorten vorgegeben werden', async () => {
    return await assert.isNotEmpty(page.getCountries());
});

Given('ich möchte einen Vertrag berechnen', async () => {
    return await 'ok';
});

Given('der Multiplikator für {string} ist {float}', async (string, float) => {
    return await 'ok';
});

Given('der Sockelbetrag ist {float} Euro', async (float) => {
    return await 'ok';
});

Given('ich heiße {string}', async (name) => {
    return await page.enterNameInput(name);
});

Given('ich wohne in {string}', async (country) =>  {
    return page.enterCountryInput(country);
});

Given('ich bin {int} Jahre alt', async (age) => {
    return await page.enterDateInput(age);
});

When('ich einen Vertrag berechne', async() => {
    return await page.pushCalculateButton();
});

Then('soll ein Beitrag von {float} Euro ermittelt werden', async (premium) => {
    var premiumString = parseFloat(premium).toFixed(2).replace('.',',') + " €";
    return await expect(Promise.resolve(page.getPremium())).to.eventually.equal(premiumString);
});

When('ich ein Datum auswähle', async () => {
    return await 'pending';
});

Then('soll das Datum im deutschen Format angezeigt werden', async () => {
    return await 'pending';
  });

When('ich einen Beitrag berechnet habe', async () => {
    await page.enterNameInput("Marko");
    await page.enterCountryInput("Deutschland");
    await page.enterDateInput(40);
    return await page.pushCalculateButton();
});

Then('soll der Beitrag im deutschen Format mit Euro Zeichen angezeigt werden', async () => {
    return await expect(Promise.resolve(page.getPremium()))
    .to.eventually.match(/[0-9]+[,]{1}[0-9]{2}[ ]{1}[€]{1}/);
});


