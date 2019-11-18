import { Before, Given, Then, When } from 'cucumber';
import { AppPage } from '../pages/app.po';

let page: AppPage;

let chai = require('chai');
chai.use(require('chai-as-promised'));
chai.use(require('chai-match'));
let expect = chai.expect;
let assert = chai.assert

var nameTmp = "Max Mayer"; 
var dateOfBirthTmp = "01.01.1980";
var countryTmp = "Deutschland";

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
    await page.pushCalendarButton();
    return await page.enterDateCalendar();
});

Then('soll das Datum im deutschen Format angezeigt werden', async () => {
    return await expect(Promise.resolve(page.getDateOfBirth()))
    .to.eventually.match(/[0-9]{2}[.][0-9]{2}[.][0-9]{4}/);
  });

When('ich einen Beitrag berechnet habe', async () => {
    await page.enterNameInput(nameTmp);
    await page.enterCountryInput(countryTmp);
    await page.enterDateInputByString(dateOfBirthTmp);
    return await page.pushCalculateButton();
});

Then('soll der Beitrag im deutschen Format mit Euro Zeichen angezeigt werden', async () => {
    return await expect(Promise.resolve(page.getPremium()))
    .to.eventually.match(/[0-9]+[,][0-9]{2}[ ][€]/);
});

Given('ich habe alle anderen Angaben korrekt eingegeben', async() => {
    await page.enterNameInput(nameTmp);
    await page.enterCountryInput(countryTmp);
    return await page.enterDateInputByString(dateOfBirthTmp);
});

Then('soll kein Hinweis erscheinen', async() => {
   return await expect(page.isTooltipPresent()).to.equal(false);
});

Given('ich gebe kein/keinen {string} an', async(string) => {
    switch(string) {
        case "Namen":
            nameTmp = '';
            return await page.enterNameInput(nameTmp);
        case "Geburtsdatum":
            dateOfBirthTmp = '';
            return await page.enterDateInputByString(dateOfBirthTmp);
        case "Wohnort":
            countryTmp = '';
            return await page.enterDateInputByString(countryTmp);
    };
});

Then('soll ein Hinweis zur Korrektur für das/den {string} erscheinen', async(string) => {
    return await expect(Promise.resolve
            (page.getToolTipsAll()
                .filter((elem) => {
                    return elem.getText().then((text) => text.includes(string));
                }
            ).count())
        )
    .to.eventually.equal(1);
});




