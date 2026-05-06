import { Locator, Page } from "../fixtures/fixtures";
import { checkoutComplete } from "../constants/endpoints.constants.json";
import BasePage from "./base.page";

export default class CheckoutCompletePage extends BasePage {
    public readonly endpoint = checkoutComplete;

    public readonly checkoutCompleteLabel: Locator;

    constructor(page: Page) {
        super(page);
        this.checkoutCompleteLabel = this.page.locator(".complete-header");
    }
}
