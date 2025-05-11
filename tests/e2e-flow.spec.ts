/*
 - import the dependencies test
    -   Login Page Class
    -   Products Page Class
    -   Cart Page Class
    -   Checkout Page Class
    -   Order Page Class
    -   Payment Page Class

*/

import { test } from '@playwright/test';
import { LoginPage } from '../pages/login_page..ts';
import { ProductsPage } from '../pages/products_page';  
import { CartPage } from '../pages/cart_page';
import { CheckoutPage } from '../pages/checkout_page'
import { OrderPage } from '../pages/order_page';
import { PaymentPage } from '../pages/payment_page';

/*
- test suite for the E2E flow
*/
test.describe('End-to-End Flow -  AutomationExercise  - login to checkout', () => {
  // e2e flow login - add product to cart - checkout
  test('user should be able to login, add Men T-shirt to cart and then checkout successfully', async ({ page }) => {
    // Step 1: Login
    const login_page = new LoginPage(page);
    await login_page.goto_home_page();
    await login_page.navigate_to_login_page();
    await login_page.login_with_valid_credentials();

    // Step 2: Products
    const products_page = new ProductsPage(page);
    await products_page.navigate_to_products_page();
    await products_page.add_men_tshirt_to_cart();

    // Step 3: View Cart
    const cart_page = new CartPage(page);
    await cart_page.open_cart_page();

    // Step 4: Checkout
    const checkout_page = new CheckoutPage(page);
    await checkout_page.proceed_to_checkout();

    // Step 5: Place Order
    const order_page = new OrderPage(page);
    await order_page.place_order();                     // click on Place Order
    await order_page.verify_pay_and_confirm_visible();

    // Payment & Confirm
    const payment_page = new PaymentPage(page);
    await payment_page.fill_payment_details_and_submit();

  });

});
