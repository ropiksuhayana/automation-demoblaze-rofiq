class cartPageObjects {
    visitCart() {
      cy.xpath('//*[@id="navbarExample"]/ul/li[4]/a').click();
    }
  
    proceedToCheckout() {
      cy.xpath('//*[@id="page-wrapper"]/div/div[2]/button').contains('Place Order').click();
    }
  }
  
  exports.module = new cartPageObjects();