import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/LoginPage.js';
import { validTestData } from '../../../test-data/validTestData.js';

test('Login with valid credentials', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.loginWithPassword(
    validTestData.email,
    validTestData.password
  );
await page.waitForTimeout(2000);
  await expect(loginPage.userGreeting).toBeVisible();

});