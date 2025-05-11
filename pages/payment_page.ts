/*
 - dependencies of playwright object
*/
import { Page, Locator, expect } from '@playwright/test';

// define the class object
export class PaymentPage {
  // define class variables
  private page: Page;
  private name_on_card: Locator;
  private card_number: Locator;
  private cvc: Locator;
  private expiry_month: Locator;
  private expiry_year: Locator;
  private pay_button: Locator;
  private order_confirmation_message: Locator;

  // class constructor to initialize values
  constructor(page: Page) {
    this.page = page;
    this.name_on_card = page.locator('[data-qa="name-on-card"]'); 
    this.card_number = page.locator('[data-qa="card-number"]');   
    this.cvc = page.locator('[data-qa="cvc"]');                   
    this.expiry_month = page.locator('[data-qa="expiry-month"]'); 
    this.expiry_year = page.locator('[data-qa="expiry-year"]');   
    this.pay_button = page.locator('[data-qa="pay-button"]');      
    this.order_confirmation_message = page.locator('p', {
      hasText: 'Congratulations! Your order has been confirmed!',
    });  
  }

  // fill payment form and submit the order
  async fill_payment_details_and_submit() {
    // fill all input fields with dummy values
    await this.name_on_card.fill('dummy');
    await this.card_number.fill('20');
    await this.cvc.fill('20');
    await this.expiry_month.fill('20');
    await this.expiry_year.fill('20');

    // confirm order
    await this.pay_button.click();

    // assertion applied to verify order confirmation message is visible
    await expect(this.order_confirmation_message).toBeVisible();
  }
}
