import { ThankYouForYourPurchaseElements } from "./thank-you-for-your-purchase.elemets";

export class ThankYouForYourPurchaseMethods{
    static clickOnOkButton(){
        ThankYouForYourPurchaseElements.buttons.ok.click();
    }

    static verifyGreenCheckMarkIsDisplayed(){
        ThankYouForYourPurchaseElements.icons.greenCheckmark.should("exist");
    }
}