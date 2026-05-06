import { Locator, Page } from "../fixtures/fixtures";
import { cart } from "../constants/endpoints.constants.json";
import BasePage from "./base.page";
import Header from "./components/header.component";

export default class CartPage extends BasePage {
    public readonly endpoint = cart;

    public readonly header: Header;
    public readonly checkoutBtn: Locator;

    constructor(page: Page) {
        super(page);

        this.header = new Header(page);
        this.checkoutBtn = this.page.locator("#checkout");
    }

    async proceedToCheckout(): Promise<void> {
        await this.checkoutBtn.click();
    }
}
