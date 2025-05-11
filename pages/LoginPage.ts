/*
 - dependencies of playwright object
*/
import { Page, Locator,expect } from "@playwright/test";

/*
 - import login credentials
*/

import { login_credentials } from '../data/test-data'
// define the class object
export class LoginPage {
    // define class variables
    private page: Page;
    private login_page_link: Locator;
    private email: Locator;
    private password: Locator;
    private login: Locator;
    private login_success_criteria: Locator;
    // class constructor to initialize values
    constructor(page: Page) {
        this.page = page;
        this.login_page_link = page.getByRole('link', { name: 'Signup / Login' });
        this.email = page.locator('[data-qa="login-email"]');
        this.password = page.locator('[data-qa="login-password"]');
        this.login = page.locator('[data-qa="login-button"]');
        this.login_success_criteria = page.locator('text=Logged in as');
      }
    // open the home page  
    async goto_home_page() {
    await this.page.goto('https://www.automationexercise.com/');
    }
    // go to login page
    async navigate_to_login_page() {
    await this.login_page_link.click();
    }
    // implement login locators 
    async login_with_valid_credentials() {
    await this.email.fill(login_credentials.email);
    await this.password.fill(login_credentials.password);
    await this.login.click();
    await expect(this.login_success_criteria).toBeVisible();
    }
}






















// my password is shipinmehdi