/*
 - dependencies of playwright object
*/
import { Page, Locator, expect } from '@playwright/test';

// define the class object
export class CartPage {
  // define class variables
  private page: Page;
  private cart_button: Locator;
  private proceed_to_checkout_button: Locator;

  // class constructor to initialize values
  constructor(page: Page) {
    this.page = page;
    this.cart_button = page.getByRole('link', { name: 'View Cart' });  
    this.proceed_to_checkout_button = page.locator('a.btn.btn-default.check_out');  // Proceed to Checkout button

    
  }

  // open the cart page
  async open_cart_page() {
    // click on view cart button
    await this.cart_button.click();  
    // assertion applied to check Proceed To Checkout button is visible
    await expect(this.proceed_to_checkout_button).toBeVisible();  

  }
}
