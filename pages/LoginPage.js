

// pages/LoginPage.js
export class LoginPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // --- 1. Common Locators (Used in both flows) ---
    this.myAccountLink = page.locator('a').filter({ hasText: 'My Account' });
    this.emailInput = page.getByRole('textbox', { name: 'Email', exact: true });

    // --- 2. Password Flow Locators ---
    this.loginWithPasswordBtn = page.locator('button').filter({ hasText: 'Login with Password' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.passwordError = page.getByText('Wrong credentials.');
    this.userGreeting = page.getByText('Hello rajkumar'); // Success Message

    // --- 3. OTP Flow Locators ---
    this.getOtpButton = page.getByRole('button', { name: 'Get OTP' });
    this.otpInputs = page.getByRole('textbox'); // Targets the 6 input boxes
    this.otpError = page.getByText('OTP verification failed.'); // Failure Message
  }

  // --- Actions ---

  async goto() {
    await this.page.goto('https://www.travelstart.co.za/');
  }

  // Method 1: Login with email and Password
  async loginWithPassword(email, password) {
    await this.myAccountLink.click();
    await this.emailInput.fill(email);
    await this.loginWithPasswordBtn.click();
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  // Method 2: Request OTP (Step 1 of OTP flow)
  async requestOtp(email) {
    await this.myAccountLink.click();
    await this.emailInput.fill(email);
    await this.getOtpButton.click();
  }

  // Method 3: Fill OTP Code (Step 2 of OTP flow)
  async fillOtpCode(code) {
    // Wait for the boxes to appear
    await this.otpInputs.first().waitFor();
    
    // Loop to fill all digits (Works for "000000" or real OTP)
    for (let i = 0; i < code.length; i++) {
      await this.otpInputs.nth(i).fill(code[i]);
    }
  }
}