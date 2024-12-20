import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { ContactData } from "../pages/contact/contact.data";
import { ContactMethods } from "../pages/contact/contact.methods";
import { HomeMethods } from "../pages/home/home.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../utilitarios/logger";

describe(CommonPageData.testSuites.contacto, () => {
    it('Enviar mensaje de contacto', () => {
        Logger.stepNumber(1);
        Logger.step('Navegar a la página de inicio');
        CommonPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2);
        Logger.step('Hacer clic en "Log in" en la barra de navegación');
        CommonPageMethods.clickOnLoginOption();

        Logger.stepNumber(3);
        Logger.step('Ingresar un nombre de usuario y contraseña válidos');
        LoginMethods.insertUsername(LoginData.validCredentials.username);
        LoginMethods.insertPassword(LoginData.validCredentials.password);

        Logger.stepNumber(4);
        Logger.step('Hacer clic en "Log in" para iniciar sesión');
        LoginMethods.clickOnLoginButton();
        Logger.verification('Verificar que se redirige al usuario a la página de inicio');
        CommonPageMethods.verifySignedUser(LoginData.validCredentials.username);

        Logger.stepNumber(5);
        Logger.step('Hacer click en "Contacto"');
        CommonPageMethods.clickOnContactOption();
        ContactMethods.newMessageText();

        Logger.stepNumber(6);
        Logger.step('Completar todos los campos');
        ContactMethods.insertContactInformation(ContactData.contactData);

        Logger.stepNumber(7);
        Logger.step('Enviar mensaje haciendo click en el botón "Send Message"');
        ContactMethods.interceptSendMessageButton();
        Logger.verification('Verificar que se muestra un mensaje de confirmación y se redirige al usuario a la página de inicio');
        ContactMethods.verifyThatThanksForTheMessageMessageIsDisplayed();
        HomeMethods.verifyHomePageIsShown();

        Logger.postCondition('Log out');
        CommonPageMethods.logout();
    });
});