import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getCountries() {
    return element(by.model('model.country')).
        all(by.tagName('option')).getAttribute('value')
  }

  enterNameInput(text: string) {
    element(by.model('model.name')).sendKeys(text);
  }

  enterDateInput(text: string) {
    element(by.model('model.dateOfBirth')).removeAttr('readonly');
    element(by.model('model.dateOfBirth')).sendKeys(text);
  }

  enterCountryInput(text: string) {
    var select = element(by.model('model.country'));
    select.$('[value=' + text + ']').click();
  }

  pushCalculateButton() {
    element(by.id('calculationButton')).click();
  }

  getPremium() {
    element(by.id('#premium')).getText();
  }

}
