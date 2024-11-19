import { CommonPageMethods } from "../common-page/common-page.methods";
import { ContactElements } from "./contact.elements";

export class ContactMethods{
    static newMessageText() {
        ContactElements.text.newMessage.should('have.text', `New message`);
    }

    static insertContactEmail(contactEmail){
        ContactElements.textboxes.contactEmail.invoke('val', contactEmail);
    }
    static insertContactName(contactName){
        ContactElements.textboxes.contactName.invoke('val', contactName);
    }
    static insertMessage(message){
        ContactElements.textboxes.message.invoke('val', message);
    }

    static insertContactInformation(data){
        this.insertContactEmail(data.contactEmail);
        this.insertContactName(data.contactName);
        this.insertMessage(data.message);
        cy.wait(1000);
    }

    static clickOnSendMessageButton(){
        ContactElements.buttons.sendMessage.click();
    }

    static verifyAlert(expectedMessage) {
        cy.on('window:alert', (str) => {
            expect(str).to.equal(expectedMessage)
        })
    }

    static verifyThatThanksForTheMessageMessageIsDisplayed(){
        CommonPageMethods.verifyAlert('Thanks for the message!!');
    }

    static interceptSendMessageButton(){
        cy.intercept('GET', 'https://demoblaze.com/index.html').as('send()');
        cy.get('button[onclick="send()"]').each(($button) => {
            cy.wrap($button).click();
            cy.wait('@send()');
        })
    }
}