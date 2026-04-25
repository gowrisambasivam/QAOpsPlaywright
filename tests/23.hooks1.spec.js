//Login-->Test 1-->Logout
//Login-->Test 2-->Logout
//Before Each test case run login and after each test case run log out
//Before All test cases run login and after test cases run logout
import { test, expect } from '@playwright/test';

test.skip('Home Page Test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html')
  //Login
  await page.locator('#login2').click()
  await page.locator('#loginusername').fill('pavanol')
  await page.locator('#loginpassword').fill('test@123')
  await page.locator('//button[normalize-space()="Log in"]').click()
await page.waitForTimeout(3000)
  //Home Page
  const products = await page.$$('.hrefch')
  expect(products).toHaveLength(9)

  //Logout

  await page.locator('#logout2').click()
});

test.skip('AddProduct', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html')
  //Login
  await page.locator('#login2').click()
  await page.locator('#loginusername').fill('pavanol')
  await page.locator('#loginpassword').fill('test@123')
  await page.locator('//button[normalize-space()="Log in"]').click()
await page.waitForTimeout(3000)
await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
await page.locator('.btn.btn-success.btn-lg').click()
page.on('dialog', async dialog=>{
    expect(dialog.message()).toContain('Product added.')
    await aidlog.accept()
})
  //Home Page
  const products = await page.$$('.hrefch')
  

  //Logout

  await page.locator('#logout2').click()
});
