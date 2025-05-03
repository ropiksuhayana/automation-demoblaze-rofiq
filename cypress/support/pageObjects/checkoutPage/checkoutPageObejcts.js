class checkoutPageObjects {
    fillCheckoutForm(name, country, city, card, month, year, zip, phone) {
      cy.xpath('#name').type(name);
      cy.xpath('#country').type(country);
      cy.xpath('#city').type(city);
      cy.xpath('#card').type(card);
      cy.xpath('#month').type(month);
      cy.xpath('#year').type(year);
    }
  
    clickPurchaseButton() {
        cy.xpath('.//*[@id="orderModal"]/div/div/div[3]/button[2]').contains('Purchase').click();
    }
  
    verifySuccessCheckout() {
        cy.xpath('.sweet-alert').should('contain', 'Thank you for your purchase!');
    }
  }
  
  exports.module = new checkoutPageObjects();