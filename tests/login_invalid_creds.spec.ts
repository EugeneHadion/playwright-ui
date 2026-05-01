import { expect, test } from "../fixtures/fixtures";
import { errorInvalidCredentials } from "../constants/errors.constants.json";

test.describe("Error Message for Invalid Credentials", { tag: "@002" }, () => {
    test("Try to login with invalid credentials", async ({ loginAs, loginPage }) => {
        await loginAs('invalidPassword');
        await expect(loginPage.errorLabel).toHaveText(errorInvalidCredentials);
        await expect(loginPage.errorLabel).toHaveText(errorInvalidCredentials);




        await expect(loginPage.errorLabel).toHaveText(errorInvalidCredentials);




        await expect(loginPage.errorLabel).toHaveText(errorInvalidCredentials);




        await expect(loginPage.errorLabel).toHaveText(errorInvalidCredentials);




        await expect(loginPage.errorLabel).toHaveText(errorInvalidCredentials);

    });
});
