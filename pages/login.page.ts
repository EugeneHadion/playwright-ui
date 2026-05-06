import { Locator, Page } from "../fixtures/fixtures";
import { login } from "../constants/endpoints.constants.json";
import BasePage from "./base.page";
import { Credentials } from "../test-data/users";

export default class LoginPage extends BasePage {
    public readonly endpoint = login;

    public readonly usernameField: Locator;
    public readonly passwordField: Locator;
    public readonly loginBtn: Locator;
    public readonly errorLabel: Locator;

    constructor(page: Page) {
        super(page);

        this.usernameField = this.page.locator("#user-name");
        this.passwordField = this.page.locator("#password");
        this.loginBtn = this.page.locator("#login-button");
        this.errorLabel = this.page.locator('[data-test="error"]');
    }

    async fillCreds(creds: Credentials): Promise<void> {
        await this.usernameField.fill(creds.username);
        await this.passwordField.fill(creds.password);
    }

    async login(creds: Credentials): Promise<void> {
        await this.open();
        await this.fillCreds(creds);
        await this.loginBtn.click();
    }
}
