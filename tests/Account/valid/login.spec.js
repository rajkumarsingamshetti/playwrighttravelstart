import { test, expect } from '@playwright/test';
import { testData } from './validtestData.js';
import { LoginPage } from '../../../pages/loginpage.js';  

test('test login with valid credentials shows user greeting', async ({ page }) => {

  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.loginWithPassword(testData.email, testData.password);
  await expect(loginPage.userGreeting).toBeVisible({ timeout: 5000 });});