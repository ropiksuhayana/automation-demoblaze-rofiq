// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const homePage = require ('../support/pageObjects/homePage/homePageObjects')
const loginPage = require ('../support/pageObjects/loginPage/loginPageObjects')
const staticData = require ('../support/staticData/staticData')


Cypress.Commands.add('loginWithValidCredentials', () => {
        homePage.goToHomePage();
        homePage.clickLogInMenu();
        homePage.verifyLogInMenuAppears();
        loginPage.inputUsername(staticData.valid_username);
        loginPage.inputPassword(staticData.valid_password);
        loginPage.clickLogInButton();
        homePage.verifySuccessRedirectToLoginPage(staticData.valid_username);
  });
  