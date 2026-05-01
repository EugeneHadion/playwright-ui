// import { Locator, Page } from "../fixtures/fixtures";
// import { inventory } from "../constants/endpoints.constants.json";
// import BasePage from "./base.page";

// export default class InventoryPage extends BasePage {
//     public extendSidebarMenuBtn: Locator;
//     public shoppingCartBtn: Locator;
//     public addToCardBtn: Locator;
//     public shoppingCardBadge: Locator;

//     constructor(page: Page) {
//         super(page);
//         this.usePage = page;
//         this.endpoint = inventory;
//     }

//     set usePage(page: Page) {
//         super.usePage = page;
//         this.extendSidebarMenuBtn = page.locator("#react-burger-menu-btn");
//         this.shoppingCartBtn = page.locator(".shopping_cart_link");
//         this.addToCardBtn = page.locator(".inventory_item .btn.btn_primary.btn_small");
//         this.shoppingCardBadge = page.locator(".shopping_cart_badge");
//     }

//     /** Open the Inventory page */
//     async open(): Promise<void> {
//         await super.open(this.endpoint);
//     }
// }
import { Locator, Page } from "../fixtures/fixtures";
import { inventory } from "../constants/endpoints.constants.json";
import BasePage from "./base.page";

export default class InventoryPage extends BasePage {
    public endpoint = inventory;

    public readonly extendSidebarMenuBtn: Locator;
    public readonly shoppingCartBtn: Locator;
    public readonly addToCartBtn: Locator;
    public readonly shoppingCartBadge: Locator;

    constructor(page: Page) {
        super(page);

        this.extendSidebarMenuBtn = this.page.locator("#react-burger-menu-btn");
        this.shoppingCartBtn = this.page.locator(".shopping_cart_link");
        this.addToCartBtn = this.page.locator(".inventory_item .btn.btn_primary.btn_small");
        this.shoppingCartBadge = this.page.locator(".shopping_cart_badge");
    }
}