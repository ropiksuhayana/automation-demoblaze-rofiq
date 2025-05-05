class logInPageObjects{
    inputUsername(username) {
        cy.wait(2000);
        const usernameField = cy.xpath('//*[@id="loginusername"]');
        if (username) {
            usernameField.type(username);
        } else {
            usernameField.clear(); // kosongkan jika tidak ada input
        }
    }
    
    inputPassword(password) {
        cy.wait(2000);
        const passwordField = cy.xpath('//*[@id="loginpassword"]');
        if (password) {
            passwordField.type(password);
        } else {
            passwordField.clear(); // kosongkan jika tidak ada input
        }
    }

    clickLogInButton(){
        cy.xpath('//*[@id="logInModal"]/div/div/div[3]/button[2]').click();
    }



}

module.exports = new logInPageObjects();