
const {test, expect}=require('@playwright/test')
test('MouseHover', async({page})=>
{
await page.goto('https://demo.opencart.com/')
const desktop=await page.locator('//a[normalize-space()="Desktops"]')
const mackbook=await page.locator('//a[normalize-space()="Mac (1)"]')
//mouse hover on desktop
await desktop.hover()
await mackbook.hover()
await waitForTimeout(3000)
}
)

