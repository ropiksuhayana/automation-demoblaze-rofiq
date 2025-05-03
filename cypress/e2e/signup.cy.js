// const { it } = require("mocha");
const homePage = require ('../support/pageObjects/homePage/homePageObjects')
const registerPage = require ('../support/pageObjects/signinPage/signinPageObjects')
const staticData = require ('../support/staticData/staticData')

describe('sign up features', () => {
  it('Sign up with valid credentials', () => {
    homePage.goToHomePage();
    homePage.clickSignUpMenu();
    homePage.verifySignInMenuAppears();
    registerPage.inputUsername(staticData.valid_username);
    registerPage.inputPassword(staticData.valid_password);
    registerPage.clickSignUpButton();
    homePage.verifySignUpSuccessMessageAppears();

  })
  it('Sign up with empty data', () => {
    homePage.goToHomePage();
    homePage.clickSignUpMenu();
    homePage.verifySignInMenuAppears();
    registerPage.inputUsername(staticData.empty_data);
    registerPage.inputPassword(staticData.empty_data);
    registerPage.clickSignUpButton();
    homePage.verifyEmptyCredsErrorMessageAppears();
  })

})