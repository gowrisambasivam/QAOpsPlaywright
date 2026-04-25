
const {test, expect}=require('@playwright/test')
test('multiSelectDropDown@passed', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //select multiple options from muti-select drop-down
    await page.selectOption('id=colors',['Red','Yellow'])
//1) Check number of drop-down options
await expect(page.locator('#colors option')).toHaveCount(7)
    await page.waitForTimeout(1000)

//2) Check number of options using array
const totalColors=await page.$$('#colors option')
await expect(totalColors.length).toBe(7)

//3)Check value in a drop-down
const checkDropDownValue=await page.locator('#colors').textContent()
console.log("Drop-down values: ", checkDropDownValue)
await expect(checkDropDownValue.includes("Yellow")).toBeTruthy()
})