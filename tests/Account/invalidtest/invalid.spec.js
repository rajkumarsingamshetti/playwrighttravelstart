// tests/Account/invalidtest/invalidlogin.spec.js

import { test, expect } from '@playwright/test';
import { invalidTestData } from './invalidtestdata'; // Your existing data file   // Import the class we created above
import { LoginPage } from '../../../pages/loginpage';
test('test login with invalid credentials shows error message', async ({ page }) => {
  
  // 1. Initialize the Page Object
  const loginPage = new LoginPage(page);

  // 2. Use the methods from the class
  await loginPage.goto();
  
  // 3. Perform the login using your data
  await loginPage.loginWithPassword(invalidTestData.email, invalidTestData.password);

  // 4. Assert using the locator defined in the class
    
  await expect(loginPage.passwordError).toBeVisible({ timeout: 5000 });

});