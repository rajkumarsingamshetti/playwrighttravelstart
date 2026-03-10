export class LoginPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // ---------- Common Locators ----------
   this.myAccountLink = page.locator('a:has-text("My Account")');
    this.emailInput = page.getByRole('textbox', { name: 'Email', exact: true });

    // ---------- Password Login ----------
   this.loginWithPasswordBtn = page.locator('button:has-text("Login with Password")');
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });

    this.passwordError = page.getByText('Wrong credentials.');

    // greeting should not be hardcoded
   this.userGreeting = page.locator('text=Hello');

    // ---------- OTP Login ----------
    this.getOtpButton = page.getByRole('button', { name: 'Get OTP' });
    this.otpInputs = page.locator('input[type="text"]');
    this.otpError = page.getByText('OTP verification failed.');
  }

  // ---------- Navigation ----------
  async goto() {
    await this.page.goto('https://www.travelstart.co.za/');
  }

  async openLogin() {
    await this.myAccountLink.click();
  }

  // ---------- Login With Password ----------
  async loginWithPassword(email, password) {

    await this.openLogin();

    await this.emailInput.fill(email);

    await this.loginWithPasswordBtn.click();

    await this.passwordInput.fill(password);

    await this.loginButton.click();
  }

  // ---------- Request OTP ----------
  async requestOtp(email) {

    await this.openLogin();

    await this.emailInput.fill(email);

    await this.getOtpButton.click();
  }

  // ---------- Enter OTP ----------
  async fillOtpCode(code) {

    await this.otpInputs.first().waitFor();

    for (let i = 0; i < code.length; i++) {

      await this.otpInputs.nth(i).fill(code[i]);

    }
  }

}