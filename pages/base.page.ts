import { expect } from "@playwright/test";
import { Page } from "../fixtures/fixtures";

export default abstract class BasePage {
    public readonly page: Page;
    public abstract readonly endpoint: string;

    constructor(page: Page) {
        this.page = page;
    }

    async open(): Promise<void> {
        await this.page.goto(this.endpoint);
    }

    async expectOpened(): Promise<void> {
        await expect(this.page).toHaveURL(this.endpoint);
    }
}
