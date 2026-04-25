//multiple context each user can have one context or tab
// parallel testing
//  faster than multiple browsers
//  no cookies or storage
// each context can emulate a device like Pixel 12, Pixel 5
// each context can open many pages ex: you are on page x and clicking on a link opens in a new tab
const {test, expect, chromium}=require('@playwright/test')
test.skip('Handle Multiple Pages/Windows@passed', async() => {
const browser=await chromium.launch()
//create browser
const context = await browser.newContext()  //create context Browser-->Context-->MultiplePages
const page1=await context.newPage()
const page2=await context.newPage()
const allPages=context.pages()
console.log("Total Number of Pages:", allPages.length)
await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await expect(page1).toHaveTitle('OrangeHRM')
await page2.goto("https://orangehrm.com")
await expect(page2).toHaveTitle('OrangeHRM: All in One HR Software for Businesses')
await page1.waitForTimeout(3000)
}
)

test('Handle Multiple Pages/Windows1@passed', async() => {
const browser=await chromium.launch()
//create browser
const context = await browser.newContext()  //create context Browser-->Context-->MultiplePages
const page1=await context.newPage()

const allPages=context.pages()
console.log("Total Number of Pages:", allPages.length)
await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await expect(page1).toHaveTitle('OrangeHRM')

const pagePromise=context.waitForEvent('page')//wait fot the new page to open in next tab
page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click()//click on the link that opens in new tab


const newPage=await pagePromise
await expect(newPage).toHaveTitle('OrangeHRM: All in One HR Software for Businesses')
await page1.waitForTimeout(3000)
await newPage.waitForTimeout(3000)
}
)

//Say I have page and clicking on a link in page takes me to page1. 
//example https://medium.com/geekculture/get-links-to-open-in-a-new-tab-84bbbbeb6ab0 clicking on a link in this page takes u to new tab
//we need to usually capture the new page before clicking on the link, otherwise the new page won't be recognized
// context.waitForEvent('page');//this waitForEvent page won't open until u click on the link. 
//documentlink.click(); //upon clicking new page is opened


//below is the right way to define all promise
//const [newPage]=promise.all(//newPage is the return from the event and there is no action upon doing click()
//[context.waitForEvent('page'), //both of these steps needs to be fulfilled and then it will come out of the array
//documentlink.click()]

