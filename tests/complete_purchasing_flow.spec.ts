import { expect, test } from "../fixtures/fixtures";
import { generateRandomNumber, generateRandomString } from "../helper/random_generator.helper";

test.describe("Complete Flow for Purchasing", () => {
    test("Complete Flow for Purchasing", { tag: "@004" }, async ({ loggedInAs, inventoryPage, cartPage, checkoutStepOnePage, checkoutStepTwoPage, checkoutCompletePage }) => {
        await test.step("Open inventory as authenticated user", async () => {
            await loggedInAs("standard_user");
            await inventoryPage.open();
            await inventoryPage.expectOpened();
        });

        await test.step("Add item to the cart", async () => {
            await inventoryPage.addItemToCart(0);
            await expect(inventoryPage.header.cartBadge).toBeVisible();
        });

        await test.step("Open cart page", async () => {
            await inventoryPage.openCart();
            await cartPage.expectOpened();
        });

        await test.step("Confirm item. Go to checkout", async () => {
            await cartPage.proceedToCheckout();
            await checkoutStepOnePage.expectOpened();
        });

        await test.step("Checkout. Fill payment info", async () => {
            await checkoutStepOnePage.submitShippingInfo({
                firstName: generateRandomString(5),
                lastName: generateRandomString(5),
                postalCode: generateRandomNumber(5),
            });
            await checkoutStepTwoPage.expectOpened();
            await expect(checkoutStepTwoPage.shippingInfoLabel).toBeVisible();
        });

        await test.step("Finish payment", async () => {
            await checkoutStepTwoPage.finish();
            await expect(checkoutCompletePage.checkoutCompleteLabel).toBeVisible();
        });
    });
});
