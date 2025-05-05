// const { it } = require("mocha");
const homePage = require ('../support/pageObjects/homePage/homePageObjects')
const registerPage = require ('../support/pageObjects/signinPage/signinPageObjects')
const staticData = require ('../support/staticData/staticData')
const { faker } = require('@faker-js/faker');


describe('sign up features', () => {
  const username = faker.internet.username();   //username dan password dibuat random
  const password = faker.internet.password();
  it('Sign up with valid credentials', () => {
    homePage.goToHomePage();
    homePage.clickSignUpMenu();
    homePage.verifySignInMenuAppears();
    registerPage.inputUsername(username);
    registerPage.inputPassword(password);
    registerPage.clickSignUpButton();
    homePage.verifySignUpSuccessMessageAppears();
    cy.writeFile('cypress/fixtures/user.json', { username, password });  //menyimpan data register

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

  it('Sign up failure username already exists', () => {
    homePage.goToHomePage();
    homePage.clickSignUpMenu();
    homePage.verifySignInMenuAppears();
    registerPage.inputUsername(staticData.valid_username);
    registerPage.inputPassword(staticData.valid_password);
    registerPage.clickSignUpButton();
    homePage.verifyUserAlreadyExistsErrorMessageAppears();
  })

})