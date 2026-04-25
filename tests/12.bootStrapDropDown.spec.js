//bootstrap drop-downs are dropdowns having no <select><option> tag rather 
// div tag or UL tag like <UL><LI>/LI>

const {test, expect}=require('@playwright/test')
test('multiSelectDropDown@passed', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
})