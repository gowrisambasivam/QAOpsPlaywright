
const {test, expect}=require('@playwright/test')
test('radioButton@passed', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByPlaceholder('Username').fill("Admin")
    await page.getByPlaceholder('Password').fill("admin123")
    await page.getByRole('button',{type:'submit'}).click()//getByRole is what kind of role that element is playing
    await page.locator("//span[normalize-space()='Admin']").click()
      await page.waitForTimeout(10000)
    await page.locator("//input[@value='2']").click({ force: true });

    await page.locator("//input[@value='3']").click({ force: true });

    await page.waitForTimeout(10000)
}
)