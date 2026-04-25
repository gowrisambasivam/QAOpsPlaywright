import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('sam2006');
  await page.locator('#loginusername').press('Tab');
  await page.locator('#loginpassword').fill('Win123$');
  await page.getByRole('button', { name: 'Log in' }).click();
});