const homePage = require ('../support/pageObjects/homePage/homePageObjects')


describe('Logout features', () => {
 
  it('Logout success when user is logged in', () => {
    
    cy.loginWithValidCredentials();
    homePage.clickLogoutMenu();
    homePage.verifyLogInMenuAppears();

  })


})