import { Locator, Page } from "../fixtures/fixtures";
import { checkoutStepOne } from "../constants/endpoints.constants.json";
import BasePage from "./base.page";
import Header from "./components/header.component";

export type ShippingInfo = {
    firstName: string;
    lastName: string;
    postalCode: string;
};

export default class CheckoutStepOnePage extends BasePage {
    public readonly endpoint = checkoutStepOne;

    public readonly header: Header;
    public readonly firstnameField: Locator;
    public readonly lastnameField: Locator;
    public readonly postalCodeField: Locator;
    public readonly contBtn: Locator;

    constructor(page: Page) {
        super(page);

        this.header = new Header(page);
        this.firstnameField = this.page.locator("#first-name");
        this.lastnameField = this.page.locator("#last-name");
        this.postalCodeField = this.page.locator("#postal-code");
        this.contBtn = this.page.locator("#continue");
    }

    async fillShippingInfo(info: ShippingInfo): Promise<void> {
        await this.firstnameField.fill(info.firstName);
        await this.lastnameField.fill(info.lastName);
        await this.postalCodeField.fill(info.postalCode);
    }

    async submitShippingInfo(info: ShippingInfo): Promise<void> {
        await this.fillShippingInfo(info);
        await this.contBtn.click();
    }
}
