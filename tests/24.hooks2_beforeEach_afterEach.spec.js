//Login-->Test 1-->Logout
//Login-->Test 2-->Logout
//Before Each test case run login and after each test case run log out
//Before All test cases run login and after test cases run logout
import { test, expect } from '@playwright/test';
let page;
test.beforeEach(async ({browser})=>{
    page=await browser.newPage();
    
    await page.goto('https://www.demoblaze.com/index.html')
  //Login
  await page.locator('#login2').click()
  await page.locator('#loginusername').fill('pavanol')
  await page.locator('#loginpassword').fill('test@123')
  await page.locator('//button[normalize-space()="Log in"]').click()
await page.waitForTimeout(3000)

})
test.afterEach(async ()=>{
    await page.locator('#logout2').click()
})
test('Home Page Test', async () => {
  
  //Home Page
  const products = await page.$$('.hrefch')
  expect(products).toHaveLength(9)

});

test.skip('AddProduct', async () => {
  
await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
await page.locator('.btn.btn-success.btn-lg').click()
page.on('dialog', async dialog=>{
    expect(dialog.message()).toContain('Product added.')
    await aidlog.accept()
})
  //Home Page
  const products = await page.$$('.hrefch')

});
