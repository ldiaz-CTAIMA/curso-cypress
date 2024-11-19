export class ContactElements {
    static get textboxes() {
        return {
            get contactEmail() {
                return cy.get('input#recipient-email');
            },
            get contactName() {
                return cy.get('input#recipient-name');
            },
            get message() {
                return cy.get('textarea#message-text');
            },
        }
    }

    static get buttons() {
        return {
            get sendMessage(){
                return cy.contains('button', 'Send message');
            }
        }
    }

    static get text() {
        return {
            get newMessage(){
                return cy.contains('h5', 'New message');
            }
        }
    }
}