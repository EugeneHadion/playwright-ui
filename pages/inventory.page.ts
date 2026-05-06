import { Locator, Page } from "../fixtures/fixtures";
import { inventory } from "../constants/endpoints.constants.json";
import BasePage from "./base.page";
import Header from "./components/header.component";

export default class InventoryPage extends BasePage {
    public readonly endpoint = inventory;

    public readonly header: Header;
    public readonly addToCartButtons: Locator;

    constructor(page: Page) {
        super(page);

        this.header = new Header(page);
        this.addToCartButtons = this.page.locator(".inventory_item .btn.btn_primary.btn_small");
    }

    async addItemToCart(index: number = 0): Promise<void> {
        await this.addToCartButtons.nth(index).click();
    }

    async openCart(): Promise<void> {
        await this.header.openCart();
    }
}
