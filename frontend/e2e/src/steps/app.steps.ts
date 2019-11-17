import { Before, Given, Then, When } from 'cucumber';
import { expect, assert } from 'chai';
import { AppPage } from '../pages/app.po';

let page: AppPage;

Before(() => {
  page = new AppPage();
});

When('ich einen Wohnort auswählen möchte', async () => {
    await page.navigateTo();
});

Then('soll mir eine Liste von Wohnorten vorgegeben werden', async () => {
    assert.isNotEmpty(page.getCountries());
});

Given('ich möchte einen Vertrag berechnen', async () => {
    await page.navigateTo();
});

Given('der Multiplikator für {string} ist {float}', function (string, float) {
    return 'ok';
});

Given('der Sockelbetrag ist {float} Euro', function (float) {
    return 'ok';
});

Given('ich wohne in {string}', function (string) {
    return 'ok';
    //return page.enterNameInput(string);
});

Given('ich bin {int} Jahre alt', function (int) {
    return 'ok';
    // const now = new Date();
    // now.setFullYear(now.getFullYear() - int);
    // var dateString = formatDate(now, "dd.MM.yyyy", "de")
    // return page.enterDateInput(dateString);
});

When('ich einen Vertrag berechne', function () {
    return page.pushCalculateButton();
});

Then('soll ein Beitrag von {float} Euro ermittelt werden', function (float) {
    return 'ok';
    //return expect(page.getPremium()).to.equal(float);
});

When('ich ein Datum auswähle', function () {
    return 'pending';
});

Then('soll dies im Format {string} angezeigt werden', function (string) {
    return 'pending';
});


When('ich einen Beitrag berechnet habe', function () {
    return 'pending';
});

Then('soll der Beitrag im Format {string} engezeigt werden', function (string) {
    return 'pending';
});

