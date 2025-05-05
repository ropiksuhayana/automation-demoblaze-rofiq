class cartPageObjects {
    visitCart() {
      cy.xpath('//*[@id="cartur"]').click();
    }
    verifyOnCartPage() {
      cy.xpath('//*[@id="page-wrapper"]/div/div[1]/h2').should('contain.text', 'Products');
    }
    getCartProductName() {
      cy.wait(2000)
      return cy.xpath('//*[@id="tbodyid"]/tr/td[2]').invoke('text');
    }
  
    getCartProductPrice() {
      cy.wait(1000)
      return cy.xpath('//*[@id="tbodyid"]/tr/td[3]').invoke('text');
    }
  
    proceedToCheckout() {
      cy.xpath('//*[@id="page-wrapper"]/div/div[2]/button').contains('Place Order').click();
    }
  }
  
module.exports = new cartPageObjects();