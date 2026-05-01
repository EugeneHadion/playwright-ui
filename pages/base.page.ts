// import { Page } from "../fixtures/fixtures";

// export default class BasePage {
//     public page: Page;
//     public endpoint = "";

//     constructor(page: Page) {
//         this.usePage = page;
//     }

//     set usePage(page: Page) {
//         this.page = page;
//     }

//     /**
//      * Open page
//      * @param path - page endpoint
//      */
//     async open(path = ""): Promise<void> {
//         await this.page.goto("/" + path);
//     }
// }
import { Page } from "../fixtures/fixtures";

export default abstract class BasePage {
    public page: Page;
    public abstract endpoint: string;

    constructor(page: Page) {
        this.page = page;
    }

    async open(): Promise<void> {
        await this.page.goto(this.endpoint);
    }
}