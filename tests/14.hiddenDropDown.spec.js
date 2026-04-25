//there are instances where you cannot inspect an elememt due to it's disappearnce 
// when u try to inpect that element.
// that's when turn on debugger mode in SelctorsHub, so the lements freeze for you to inspect
const {test, expect}=require('@playwright/test')
test('locators_builtIn@passed', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
const logo=await page.getByAltText('company-branding')//mostly images will have Alt Text attribute
    await expect(logo).toBeVisible()

    await page.getByPlaceholder('Username').fill("Admin")
  await page.getByPlaceholder('Password').fill("admin123")

await page.getByRole('button',{type:'submit'}).click()
await page.locator("//span[normalize-space()='PIM']").click()
await page.locator('.oxd-select-text--after').first().click();
await page.waitForTimeout(3000)
const dropdowns=await page.$$("//div[@role='listbox']//span")
for (let dropdown of dropdowns)
    {
        const option=await dropdown.textContent()
        if(option.includes('Automation Tester6'))
        {
            await dropdown.click()
            break;
        }
    }               
await page.waitForTimeout(5000);
}
)