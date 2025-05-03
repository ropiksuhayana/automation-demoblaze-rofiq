const homePage = require ('../support/pageObjects/homePage/homePageObjects')
const loginPage = require ('../support/pageObjects/loginPage/loginPageObjects')
const productPage = require ('../support/pageObjects/productPage/productPageObjects')
const cartPage = require ('../support/pageObjects/cartPage/cartPageObjects')
const checkoutPage = require ('../support/pageObjects/checkoutPage/checkoutPageObejcts')
const staticData = require ('../support/staticData/staticData')

describe('Login features', () => {
  it('Login with valid credentials', () => {
    homePage.goToHomePage();
    homePage.clickLogInMenu();
    homePage.verifyLogInMenuAppears();
    loginPage.inputUsername(staticData.valid_username);
    loginPage.inputPassword(staticData.valid_password);
    loginPage.clickLogInButton();
    homePage.verifySuccessRedirectToLoginPage(staticData.valid_username);
  })

  it('Login with invalid data', () => {
    homePage.goToHomePage();
    homePage.clickLogInMenu();
    homePage.verifyLogInMenuAppears();
    loginPage.inputUsername(staticData.invalid_username);
    loginPage.inputPassword(staticData.invalid_password);
    loginPage.clickLogInButton();
    homePage.verifyErrorMessageForUnregisteredUsername();
  })


})