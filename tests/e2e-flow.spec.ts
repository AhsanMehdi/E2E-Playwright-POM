/*
 - import the dependencies test
    -   Login Page Class

*/

import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.ts';

/*
- test suite for the E2E flow
*/
test.describe('End-to-End Flow -  AutomationExercise  - login to checkout', () => {
  // step 1: loginc 
  test('user should be able to login website', async ({ page }) => {
    const login_page = new LoginPage(page);
    // call class methods
    await login_page.goto_home_page();
    await login_page.navigate_to_login_page();
    await login_page.login_with_valid_credentials();

    // Optionally: add checks or go to next steps (products → cart → checkout)
  });

});
