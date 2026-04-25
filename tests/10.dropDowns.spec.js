
const {test, expect}=require('@playwright/test')
test('dropDown@passed', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    //multiple ways to select dropdown values
    await page.locator("#country").selectOption({label: 'India'})
    //await page.locator("#country").selectOption("India")//select by value
    //await page.locator("#country").selectOption({value:'uk'})//select by value
   // await page.locator("#country").selectOption({index: 1})
   // await page.selectOption("#country", 'India')

    //1) check number of options in drop-down
    //await expect(page.locator('#country option')).toHaveCount(10)

//2) check number of options in drop-down
const options=await page.$$('#country option')
console.log("Number of Options in drop-down: ", options.length)
await expect(options.length).toBe(10)

//3) check presence of an value in drop-down
const content=await page.locator('#country').textContent()
await expect(content.includes("India")).toBeTruthy()

//4) check presence of content using loop
const dropdownLists=await page.$$('#country option')
let status=false
for(const dropDown of dropdownLists)

{
    let value=await dropDown.textContent()
    if(value.includes("France"))
       { status=true;
        break;
       }
}
await expect(status).toBeTruthy()
}
)