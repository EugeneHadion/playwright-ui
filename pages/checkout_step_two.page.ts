import { Locator, Page } from "../fixtures/fixtures";
import { checkoutStepTwo } from "../constants/endpoints.constants.json";
import BasePage from "./base.page";

export default class CheckoutStepTwoPage extends BasePage {
    public readonly endpoint = checkoutStepTwo;

    public readonly shippingInfoLabel: Locator;
    public readonly finishBtn: Locator;

    constructor(page: Page) {
        super(page);

        this.shippingInfoLabel = this.page.locator('[data-test="shipping-info-value"]');
        this.finishBtn = this.page.locator("#finish");
    }

    async finish(): Promise<void> {
        await this.finishBtn.click();
    }
}
