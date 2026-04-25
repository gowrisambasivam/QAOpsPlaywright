import { test, expect } from '@playwright/test';

test('page screenshot', async ({ page }) => {
    await page.goto('https://demo.opencart.com/')
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'HomePage.png'})
});

test('full page screenshot', async ({ page }) => {
await page.goto('https://demo.opencart.com/')
await page.waitForTimeout(3000)
await page.screenshot({path:'tests/screenshots/'+Date.now()+'FullPage.png', fullPage:true})
});

test('element screenshot', async ({ page }) => {

    await page.goto('https://www.google.com/')
await page.waitForTimeout(3000)
await page.locator("//span[@class='lTxWLe']").screenshot({path:'tests/screenshots/'+Date.now()+'Element.png'})

});