import { browser, by, element, protractor } from 'protractor';
import * as moment from 'moment'

export class AppPage {
  
  getElementById(idTag) {
    var EC = protractor.ExpectedConditions;
    var elById = element(by.id(idTag));
    browser.wait(EC.presenceOf(elById), 5000);
    return elById;
  }

  sendTextToElement(idTag, text) {
    return this.getElementById(idTag).sendKeys(text);
  }

  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getCountries() {
    this.getElementById('countryId').click();
    browser.sleep(1000);
    return this.getElementById('countryId').
        all(by.tagName('option')).getAttribute('value')
  }

  enterNameInput(text: string) {
    return this.sendTextToElement('nameId', text);
  }

  enterDateInput(age: any) {
    var dateOfBirth = moment().subtract(age, "years").format("DD.MM.YYYY");
    return this.getElementById('dateOfBirthId').sendKeys(dateOfBirth);
  }

  enterCountryInput(text: string) {
    this.getElementById('countryId').click();
    browser.sleep(1000);
    this.getElementById('countryId')
    .element(by.cssContainingText('option', text)).click();
  }

  pushCalculateButton() {
    return this.getElementById('calculationButtonId').click();
  }

  getPremium() {
    browser.sleep(1000);
    return this.getElementById('premiumId').getText() as Promise<any>;
  }

}
