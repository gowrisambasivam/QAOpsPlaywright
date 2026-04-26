//hard assertions will stop the execution when the test step fails
// soft assertions will continue the execution even if the test step fails
const {test, expect}=require('@playwright/test')
test('Softy Assertions',async({page})=>{
  await page.goto("https://demoblaze.com/index.html")
  await page.waitForTimeout(5000);
  // Verify I am human checkbox (reCAPTCHA) if present
  if (await page.locator('iframe[title="reCAPTCHA"]').count() > 0) {
    await page.frameLocator('iframe[title="reCAPTCHA"]').locator('#recaptcha-anchor').click();
  }
  /*await expect(page).toHaveTitle("123")
  await expect(page).toHaveURL("https://demoblaze.com/index.html")
  await expect(page.locator('.navbar-brand')).toBeVisible();*/
 await expect.soft(page).toHaveTitle("STORE")
  await expect.soft(page).toHaveURL("https://demoblaze.com/index.html")
  await expect.soft(page.locator('.navbar-brand')).toBeVisible();
  await page.waitForTimeout(5000);

})