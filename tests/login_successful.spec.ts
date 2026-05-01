import { expect, test } from "../fixtures/fixtures";

test.describe("Login", () => {
    test("Successful Login with Valid Credentials", { tag: "@001" }, async ({ loginAs, inventoryPage }) => {
        await loginAs('validUser');
        await expect(inventoryPage.extendSidebarMenuBtn).toBeVisible();
        await expect(inventoryPage.page).toHaveURL(inventoryPage.endpoint);
    });
});
