class productPageObjects {
    addToCart() {
      cy.xpath('//*[@id="tbodyid"]/div[2]/div/a').contains('Add to cart').click();
    }
  }
  
  exports.module = new productPageObjects();
  