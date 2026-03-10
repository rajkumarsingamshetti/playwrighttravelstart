// tests/Account/invalidtest/invalidlogin.spec.js

import { test, expect } from '@playwright/test';
import { invalidTestData } from '../../../test-data/invalidtestdata.js';
import { LoginPage } from '../../../pages/LoginPage.js';

test('test login with invalid credentials show error message', async ({ page }) => {

  // Initialize Page Object
  const loginPage = new LoginPage(page);

  // Open website
  await loginPage.goto();

  // Login with invalid credentials
  await loginPage.loginWithPassword(
    invalidTestData.email,
    invalidTestData.password
  );

  // Verify error message
  await expect(loginPage.passwordError).toBeVisible({ timeout: 5000 });

}, { timeout: 60000 });