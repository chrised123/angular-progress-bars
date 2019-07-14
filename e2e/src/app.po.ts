import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/app/bars');
  }

  getTitleText() {
    return element(by.css('app-root h3 a')).getText();
  }
}
