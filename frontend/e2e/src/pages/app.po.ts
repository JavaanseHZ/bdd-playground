import { browser, by, element, protractor, ElementFinder } from 'protractor';
import * as moment from 'moment'

export class AppPage {
  
  getElementById(idTag) {
      var EC = protractor.ExpectedConditions;
      var elById = element(by.id(idTag));
      browser.wait(EC.presenceOf(elById), 5000, idTag + " nicht gefunden!");
      return elById;
  }

  getElementsByClass(clazz) {
    var EC = protractor.ExpectedConditions;
    var elByClass = element.all(by.className(clazz));
    browser.wait(EC.presenceOf(elByClass.first()), 5000);
    return elByClass;
  }

  getElementsByTag(tag) {
    var EC = protractor.ExpectedConditions;
    var elByTag = element.all(by.tagName(tag));
    browser.wait(EC.presenceOf(elByTag.first()), 5000);
    return elByTag;
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

  enterDateInputByString(dateOfBirth: any) {
    return this.getElementById('dateOfBirthId').sendKeys(dateOfBirth);
  }

  enterCountryInput(text: string) {
    this.getElementById('countryId').click();
    browser.sleep(1000);
    return this.getElementById('countryId')
    .element(by.cssContainingText('option', text)).click();
  }

  enterDateCalendar() {
    return this.getElementsByClass("ngb-dp-day")
    .first().click();
  }

  pushCalculateButton() {
    return this.getElementById('calculationButtonId').click();
  }

  pushCalendarButton() {
    return this.getElementById('calendarButtonId').click();
  }

  getPremium() {
    browser.sleep(1000);
    return this.getElementById('premiumId').getText() as Promise<any>;
  }

  getDateOfBirth() {
    browser.sleep(1000);
    return this.getElementById('dateOfBirthId').getText() as Promise<any>;
  }

  getToolTipsAll() {
    browser.sleep(1000);
    return this.getElementsByClass('tooltip-inner');
  }

  isTooltipPresent() {
    try {
      element(by.className('tooltip-inner')).then(function() {
          return true;
      }, function(err) {
          throw err;
      });
    } catch(err) {
      return false;
    }
  }
}
