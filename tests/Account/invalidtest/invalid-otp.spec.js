import { test, expect } from '@playwright/test';

test('Invalid Otp login', async ({ page }) => {
  await page.goto('https://www.travelstart.co.za/');
  await page.locator('a').filter({ hasText: 'My Account' }).click();
  await page.getByRole('textbox', { name: 'Email', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email', exact: true }).fill('rajkumar02cpt@gmail.com');
  await page.getByRole('button', { name: 'Get OTP' }).click();

  await expect(page.getByText('We have sent an OTP on Email ID')).toBeVisible();
 
  
 const otpInputs = page.getByRole('textbox');

await otpInputs.nth(0).fill('0');
await otpInputs.nth(1).fill('0');
await otpInputs.nth(2).fill('0');
await otpInputs.nth(3).fill('0');
await otpInputs.nth(4).fill('0');
await otpInputs.nth(5).fill('0');

  await page.getByText('OTP verification failed.').click();
  await page.getByText('OTP verification failed.').click();
});