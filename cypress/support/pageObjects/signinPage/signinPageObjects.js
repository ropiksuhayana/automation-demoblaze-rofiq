

class signInPageObjects{

    inputUsername(username) {
        cy.wait(5000);
        const usernameField = cy.xpath('//*[@id="sign-username"]');
        if (username) {
            usernameField.type(username);
        } else {
            usernameField.clear(); // kosongkan jika tidak ada input
        }
    }
    
    inputPassword(password) {
        cy.wait(5000);
        const passwordField = cy.xpath('//*[@id="sign-password"]');
        if (password) {
            passwordField.type(password);
        } else {
            passwordField.clear(); // kosongkan jika tidak ada input
        }
    }

    clickSignUpButton(){
        cy.xpath('//*[@id="signInModal"]/div/div/div[3]/button[2]').click();
    }

}
module.exports = new signInPageObjects();