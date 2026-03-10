import { test, expect } from '@playwright/test';
import { validTestData } from '../../../test-data/validTestData.js';

test('login with otp', async ({ page }) => {

  await page.goto('https://www.travelstart.co.za/');

  await page.locator('a').filter({ hasText: 'My Account' }).click();

  await page
    .getByRole('textbox', { name: 'Email', exact: true })
    .fill(validTestData.email);

  await page.getByRole('button', { name: 'Get OTP' }).click();

  await expect(
    page.getByText(`we have sent an OTP on Email ID ${validTestData.email}`)
  ).toBeVisible();

  console.log(
    await page
      .getByText(`we have sent an OTP on Email ID ${validTestData.email}`)
      .textContent()
  );

});