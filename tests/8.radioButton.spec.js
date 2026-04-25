
/*const {test, expect}=require('@playwright/test')
test('radioButton', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByPlaceholder('Username').fill("Admin")
    await page.getByPlaceholder('Password').fill("admin123")
    await page.getByRole('button',{type:'submit'}).click()//getByRole is what kind of role that element is playing
    await page.locator("//span[normalize-space()='My Info']").click()
    await page.locator("//label[normalize-space()='Female']").click()
    await expect(await page.locator("//label[normalize-space()='Female']")).toBeChecked()
  await expect(await page.locator("input[value='2']").isChecked()).toBeTruthy()
    await expect(await page.locator("input[value='1']").isChecked()).toBeFalsy()
    
}
)*/