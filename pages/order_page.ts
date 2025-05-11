/*
 - dependencies of playwright object
*/
import { Page, Locator, expect } from '@playwright/test';

/*
 - define the class object for Order Page
*/
export class OrderPage {
  // define class variables
  private page: Page;
  private place_order_button: Locator;
  private pay_and_confirm_button: Locator;

  // class constructor to initialize locators
  constructor(page: Page) {
    this.page = page;
    this.place_order_button = page.locator('a.btn.btn-default.check_out', { hasText: 'Place Order' });
    this.pay_and_confirm_button = page.locator('button#submit[data-qa="pay-button"]');
  }

  // assert visibility and click "Place Order"
  async place_order() {
    await expect(this.place_order_button).toBeVisible();       
    await this.place_order_button.click();                     
  }

  // method to verify Pay and Confirm Order button is visible
  async verify_pay_and_confirm_visible() {
    await expect(this.pay_and_confirm_button).toBeVisible();    
  }
}
