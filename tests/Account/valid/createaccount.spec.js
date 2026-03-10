import { test, expect } from '@playwright/test';
import { validTestData } from '../../../test-data/validTestData.js';

test('create account', async ({ page }) => {

  await page.goto('https://www.travelstart.co.za/');

  // open account modal
  await page.locator('a:has-text("My Account")').click();

  // switch to signup tab
  await page.getByRole('tab', { name: 'Signup' }).click();

  // wait for form
await page.getByRole('textbox', { name: 'First Name' }).waitFor();
await page.getByRole('textbox', { name: 'First Name' }).fill(validTestData.firstName);
await page.getByRole('textbox', { name: 'Surname' }).fill(validTestData.lastName);
await page.getByRole('textbox', { name: 'Email', exact: true }).fill(validTestData.email);
await page.getByRole('textbox', { name: 'Password' }).fill(validTestData.password);
  // show password
  await page.locator('.showEye').first().click();

  // accept terms
  await page.getByRole('checkbox').check();

  // submit
  await page.getByRole('button', { name: 'Sign up' }).click();

});