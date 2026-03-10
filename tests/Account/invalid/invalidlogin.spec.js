import { test, expect } from '@playwright/test';
import { invalidTestData } from '../../../test-data/invalidtestdata.js';

test('test login with invalid credentials shows error message', async ({ page }) => {
  await page.goto('https://www.travelstart.co.za/');
  await page.locator('a').filter({ hasText: 'My Account' }).click();
  await page.getByRole('textbox', { name: 'Email', exact: true }).fill(invalidTestData.email);
  await page.locator('button').filter({ hasText: 'Login with Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(invalidTestData.password);
  await page.getByRole('button', { name: 'Login' }).click();

  // Assert that "Wrong credentials." message appears
  await expect(page.getByText('Wrong credentials.')).toBeVisible({ timeout: 5000 });
});