import { Locator, Page } from "../../fixtures/fixtures";

export default class Header {
    public readonly burgerMenuBtn: Locator;
    public readonly cartLink: Locator;
    public readonly cartBadge: Locator;

    constructor(page: Page) {
        this.burgerMenuBtn = page.locator("#react-burger-menu-btn");
        this.cartLink = page.locator(".shopping_cart_link");
        this.cartBadge = page.locator(".shopping_cart_badge");
    }

    async openCart(): Promise<void> {
        await this.cartLink.click();
    }
}
