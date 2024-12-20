import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { LoginData } from "../pages/login/login.data";
import { SingupMethods } from "../pages/singup/singup.methods";
import { Logger } from "../utilitarios/logger";
const user = CommonPageMethods.generateRandomString();
const password = CommonPageMethods.generateRandomString(7);
const existingUser = LoginData.validCredentials.username

describe(CommonPageData.testSuites.registro, () => {
    it("Registro de usuario vádido", () => {
        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio')
        CommonPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer clic en "Sign up" en la barra de navegación')
        CommonPageMethods.clickOnSingUpOption();

        Logger.stepNumber(3)
        Logger.step('Completar todos los campos obligatorios con información válida')
        SingupMethods.insertUsername((user))
        SingupMethods.insertPassword((password))
        
        Logger.stepNumber(4)
        Logger.step('Hacer clic en "Sign up" para registrar el usuario')
        SingupMethods.clickOnSingupButton();
        Logger.verification('Verificar que se muestre el mensaje "Sing up successful."')
        SingupMethods.verifySingupSuccessfulMessageIsDisplayed();
    });

    it("Registro de usuario invádido", () => {
        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio')
        CommonPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer clic en "Sign up" en la barra de navegación')
        CommonPageMethods.clickOnSingUpOption();

        Logger.stepNumber(3)
        Logger.step('Completar todos los campos obligatorios con información inválida')
        SingupMethods.insertUsername((existingUser))
        SingupMethods.insertPassword((password))
        
        Logger.stepNumber(4)
        Logger.step('Hacer clic en "Sign up" para registrar el usuario')
        SingupMethods.clickOnSingupButton();
        Logger.verification('Verificar que se muestra un mensaje de error indicando los campos inválidos.')
        SingupMethods.verifyThatThisUserAlreadyExistMessageIsDisplayed();
    });

});