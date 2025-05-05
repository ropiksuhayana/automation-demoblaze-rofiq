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
         cy.xpath('//*[@id="navbarExample"]/ul/li[7]')
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

    selectProduct(productName) {
        cy.wait(3000)
        cy.xpath('//*[@id="tbodyid"]/div[2]/div/div/h4').contains(productName).click();
      }

    getSelectedProductDetails() {
        return cy.xpath('//*[@id="tbodyid"]/h2').invoke('text').then(name => {
          return cy.xpath('//*[@id="tbodyid"]/h3').invoke('text').then(priceText => {
            const price = priceText.replace('Price: ', '').replace(' *includes tax', '').trim();
            return { name: name.trim(), price };
          });
        });
      }
      clickLogoutMenu(){
        cy.xpath('//*[@id="logout2"]').click();
      }


}

module.exports = new homePageObjects ();