const {test, expect}=require('@playwright/test')
test('multiSelectDropDown@passed', async({page})=>
{

    await page.goto('https://www.emirates.com/us/english/')
   
    await page.click('#onetrust-accept-btn-handler')
     await page.waitForTimeout(5000)
    await page.getByRole('textbox', { name: 'Departure Airport'}).click();
    await page.waitForSelector("//li[contains(@class,'location__item')]")
const fromCityOption =await page.$$("//li[contains(@class,'location__item')]")
for (const CityOptions of fromCityOption)
{
    const value=await CityOptions.textContent()
    if(value.includes('Amsterdam, NetherlandsAmsterdam Airport Schiphol  AMS'))
    {
        await CityOptions.click()
        break
    }
  
}
})