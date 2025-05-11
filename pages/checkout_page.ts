/*
 - dependencies of playwright object
*/
import { Page, Locator, expect } from '@playwright/test';

// define the class object
export class CheckoutPage {
  // define class variables
  private page: Page;
  private proceed_to_checkout_button: Locator;
  private place_order_button: Locator;

  // class constructor to initialize values
  constructor(page: Page) {
    this.page = page;
    this.proceed_to_checkout_button = page.locator('a.btn.btn-default.check_out'); // Proceed to Checkout button
    this.place_order_button = page.locator('a[href="/payment"].btn.btn-default.check_out'); // Place Order button
  }

  // proceed to checkout and verify place order button
  async proceed_to_checkout() {
    await this.proceed_to_checkout_button.click();  // click on Proceed To Checkout
    await expect(this.place_order_button).toBeVisible();  // assert Place Order is visible
  }
}
