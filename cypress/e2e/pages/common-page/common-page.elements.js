export class CommonPageElements {
    static get topMenu() {
        return {
            get home() {
                return cy.contains('a', 'Home');
            },
            get contact() {
                return cy.get('a[data-target="#exampleModal"]');
            },
            get aboutUs() {
                return cy.contains('a', 'About us');
            },
            get cart() {
                return cy.contains('a', 'Cart');
            },
            get login() {
                return cy.contains('a', 'Log in');
            },
            get singup() {
                return cy.contains('a', 'Sign up');
            },
            get logout() {
                return cy.get('#logout2');
            },
        };
    }

    static get signedUser(){
        return cy.get('a#nameofuser')
    }
}