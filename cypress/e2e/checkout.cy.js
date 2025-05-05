const homePage = require ('../support/pageObjects/homePage/homePageObjects')
const productPage = require ('../support/pageObjects/productPage/productPageObjects')
const cartPage = require ('../support/pageObjects/cartPage/cartPageObjects')
const checkoutPage = require ('../support/pageObjects/checkoutPage/checkoutPageObejcts')
const staticData = require ('../support/staticData/staticData')
const { faker } = require('@faker-js/faker');

describe('Checkout features', () => {
    const name = faker.person.fullName();
    const country = faker.location.country();
    const city = faker.location.city();
    const card = faker.finance.creditCardNumber();
    const month = faker.date.month();
    const year = faker.date.future().getFullYear();
  it('Purchase a single product and verify confirmation', () => {
    
    cy.loginWithValidCredentials();
    homePage.selectProduct(staticData.product_name);
    productPage.addToCart();
    cartPage.visitCart();
    cartPage.verifyOnCartPage();
    cartPage.getCartProductName();
    cartPage.getCartProductPrice();
    cartPage.proceedToCheckout();
    checkoutPage.verifyCheckoutFormVisible();
    checkoutPage.fillCheckoutForm(name, country, city, card, month, year);
    checkoutPage.clickPurchaseButton();
    checkoutPage.verifySuccessCheckout();


  })


})