import { test, expect } from '@playwright/test';
import { testData } from './validtestData.js';
test('test', async ({ page }) => {
  await page.goto('https://www.travelstart.co.za/');
  await page.locator('a').filter({ hasText: 'My Account' }).click();
  await page.getByRole('tab', { name: 'Signup' }).click();
 
  await page.getByRole('textbox', { name: 'First Name' }).fill(testData.firstName);
  await page.getByRole('textbox', { name: 'Surname' }).fill(testData.lastName);
  await page.getByRole('textbox', { name: 'Email', exact: true }).fill(testData.email);
  await page.getByRole('textbox', { name: 'Password' }).fill(testData.password);
  await page.locator('.showEye').first().click();
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Sign up' }).click();
});
