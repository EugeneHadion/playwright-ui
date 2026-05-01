import { expect, test } from "../fixtures/fixtures";

test.describe("Error Message for Invalid Credentials", { tag: "@003" }, () => {
    test("Login with invalid credentials", async ({ loginAs, loginPage }) => {
        await loginAs('invalidPassword');
        const inputType = await loginPage.passwordField.getAttribute("type");
        expect(inputType).toBe("password");
    });
});
