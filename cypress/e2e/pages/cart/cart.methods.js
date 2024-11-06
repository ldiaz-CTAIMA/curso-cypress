import { Logger } from "../../utilitarios/logger";
import { CommonPageMethods } from "../common-page/common-page.methods";
import { LoginMethods } from "../login/login.methods";
import { CartElements } from "./cart.elements";

export class CartMethods{
    static clickOnDeleteLink(productName){
        CartElements.links.delete(productName).click();
    }

    static verifyProductAdded(productName){
        CartElements.links.delete(productName).should('be.visible');
    }

    static verifyCartPageIsShown(){
        cy.url().should('include', 'cart.html');
    }

    static clickOnPlaceOrderButton() {
        CartElements.buttons.placeOrden.click();
    }

    static deleteProducts(){
        cy.get('a[onclick*="deleteItem"]').each(link=>{
            link.click();
        })
    }

    static emptyCart(username, password){
        Logger.subStep('Navegate to Demoblaze application');
        CommonPageMethods.navigateToDemoBlaze();
        Logger.subStep('Log out');
        CommonPageMethods.logout();
        Logger.subStep('Click on Home option');
        CommonPageMethods.clickOnHomeOption();
        Logger.subStep('Click on Log in option');
        CommonPageMethods.clickOnLoginOption();
        Logger.subStep(`Login with this credenicals ${username}/${password}`)
        LoginMethods.login(username, password);
        Logger.subStep('Click on Cart option');
        CommonPageMethods.clickOnCartOption();
        Logger.subStep('Delete products from cart');
        this.deleteProducts();
    }
}