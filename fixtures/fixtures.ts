import { test as base } from "@playwright/test";

import LoginPage from "../pages/login.page";
import InventoryPage from "../pages/inventory.page";
import CartPage from "../pages/cart.page";
import CheckoutStepOnePage from "../pages/checkout_step_one.page";
import CheckoutStepTwoPage from "../pages/checkout_step_two.page";
import CheckoutCompletePage from "../pages/checkout_complete.page";
import { Credentials, UserRole, USERS } from "../test-data/users";

type Fixtures = {
    loginPage: LoginPage;
    loginAs: (role: UserRole) => Promise<void>;
    attemptLogin: (role: UserRole) => Promise<void>;
    loggedInAs: (username: string) => Promise<void>;
    inventoryPage: InventoryPage;
    cartPage: CartPage;
    checkoutStepOnePage: CheckoutStepOnePage;
    checkoutStepTwoPage: CheckoutStepTwoPage;
    checkoutCompletePage: CheckoutCompletePage;
};

export const test = base.extend<Fixtures>({
    loginPage:           async ({ page }, use) => use(new LoginPage(page)),
    inventoryPage:       async ({ page }, use) => use(new InventoryPage(page)),
    cartPage:            async ({ page }, use) => use(new CartPage(page)),
    checkoutStepOnePage: async ({ page }, use) => use(new CheckoutStepOnePage(page)),
    checkoutStepTwoPage: async ({ page }, use) => use(new CheckoutStepTwoPage(page)),
    checkoutCompletePage: async ({ page }, use) => use(new CheckoutCompletePage(page)),

    loginAs: async ({ loginPage, inventoryPage }, use) => {
        await use(async (role: UserRole) => {
            await loginPage.login(USERS[role]);
            await inventoryPage.expectOpened();
        });
    },

    attemptLogin: async ({ loginPage }, use) => {
        await use(async (role: UserRole) => {
            await loginPage.login(USERS[role]);
        });
    },

    loggedInAs: async ({ context }, use) => {
        await use(async (username: string) => {
            await context.addCookies([
                {
                    name: "session-username",
                    value: username,
                    domain: "www.saucedemo.com",
                    path: "/",
                    sameSite: "Lax",
                },
            ]);
        });
    },
});

export { expect, type Page, type Locator, type TestInfo } from "@playwright/test";
