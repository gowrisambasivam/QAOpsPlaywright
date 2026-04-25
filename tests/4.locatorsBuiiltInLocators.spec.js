/* the below methods are the special locators available specific to playwright
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

*/

const {test, expect}=require('@playwright/test')
test('locators_builtIn', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //getByAltText 
    const logo=await page.getByAltText('company-branding')//mostly images will have Alt Text attribute
    await expect(logo).toBeVisible()

    await page.getByPlaceholder('Username').fill("Admin")
  await page.getByPlaceholder('Password').fill("admin123")

await page.getByRole('button',{type:'submit'}).click()//getByRole is what kind of role that element is playing
const userName=await page.locator("//span[@class='oxd-userdropdown-tab']").textContent()//textContent is used on soemthing like label which already has a vlue and inputvalue() is used when you enter value in username or inpout box
console.log(userName)
await expect(await page.getByText(userName)).toBeVisible()

}


)