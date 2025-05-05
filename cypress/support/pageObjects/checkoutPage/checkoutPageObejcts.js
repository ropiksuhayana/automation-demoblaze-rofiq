class checkoutPageObjects {

  verifyCheckoutFormVisible() {
    cy.xpath('//*[@id="orderModal"]/div/div').should('be.visible');
  }
    fillCheckoutForm(name, country, city, card, month, year) {
      cy.xpath('//*[@id="name"]').type(name);
      cy.xpath('//*[@id="country"]').type(country);
      cy.xpath('//*[@id="city"]').type(city);
      cy.xpath('//*[@id="card"]').type(card);
      cy.xpath('//*[@id="month"]').type(month);
      cy.xpath('//*[@id="year"]').type(year);
    }
  
    clickPurchaseButton() {
        cy.xpath('.//*[@id="orderModal"]/div/div/div[3]/button[2]').contains('Purchase').click();
    }
  
    verifySuccessCheckout() {
        cy.wait(2000)
        cy.get('.sweet-alert').should('be.visible');
        cy.get('.sweet-alert h2').should('contain.text', 'Thank you for your purchase!');
        cy.get('.confirm').click();
      }
      
  }
  
  module.exports = new checkoutPageObjects();
