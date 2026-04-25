const {test, expect}=require('@playwright/test')
test('MouseHover', async({page})=>
{
await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')
const  button=await page.locator('//span[normalize-space()="right click me"]')
await button.click({button:'right'})
//double click 
//await button.dblclick()
//dragTo await button.dragTo(target) where target is the element to which you want to drag the button 
//await page.keyboard.press('Control+A')//
// await waitForTimeout(3000)
}
)