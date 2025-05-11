/*
 - dependencies of playwright object
*/
import { Page, Locator, expect } from '@playwright/test';

// define the class object
export class ProductsPage {
  // define class variables
  private page: Page;
  private products_page_link: Locator;
  private men_tshirt_product: Locator;
  private add_to_cart_button: Locator;
  private cart_button: Locator;

  // class constructor to initialize values
  constructor(page: Page) {
    this.page = page;
    this.products_page_link = page.locator('a[href="/products"]:has-text("Products")'); 
    this.men_tshirt_product = page.locator('.productinfo:has-text("Men Tshirt")');  
    this.add_to_cart_button = this.men_tshirt_product.locator('a.add-to-cart'); 
    this.cart_button = page.locator('a:has-text("View Cart")');  
  }

  // open the products page
  async navigate_to_products_page() {
    await this.products_page_link.click();  
  }

  // select the men tshirt and add to cart
  async add_men_tshirt_to_cart() {
    await this.add_to_cart_button.first().click();
    // assertion applied to view cart button
    await expect(this.cart_button).toBeVisible();  
  }
}
