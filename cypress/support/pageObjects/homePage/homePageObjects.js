const locator = require ('./homePageLocators')
const staticData = require('../../staticData/staticData');


class homePageObjects{

    goToHomePage () {
        cy.visit('https://demoblaze.com')
    }

    verifySignInMenuAppears(){
        cy.xpath(locator.signup_menu).should('exist');
    }
    verifyLogInMenuAppears(){
        cy.xpath(locator.login_menu).should('exist');
    }

    clickSignUpMenu(){
        this.verifySignInMenuAppears();
        cy.xpath(locator.signup_menu).click();
    }
    verifyAlertAppears(errorMessage) {
        cy.on('window:alert',(t)=>{
            expect(t).to.contains(errorMessage);
         })
    }

    verifyEmptyCredsErrorMessageAppears() {
        this.verifyAlertAppears(staticData.error_message.empty_creds)
    }

    verifyUserAlreadyExistsErrorMessageAppears() {
        this.verifyAlertAppears(staticData.error_message.user_alr_exists)
    }

    verifySignUpSuccessMessageAppears() {
        this.verifyAlertAppears(staticData.success_message.signup)
    }

    verifySuccessRedirectToLoginPage(username){
        // Verifikasi username tampil di navbar
         cy.xpath('//*[@id="nameofuser"]') 
            .should('be.visible')
            .and('contain.text', `Welcome ${username}`);

    }

    verifyErrorMessageForUnregisteredUsername(){
        this.verifyAlertAppears(staticData.error_message.not_registered)
    }

    clickLogInMenu(){
        this.verifyLogInMenuAppears();
        cy.xpath(locator.login_menu).click();
    }

}

module.exports = new homePageObjects ();