// Author: gowri
//
const {test, expect}=require('@playwright/test')//test and  expect are the functions provided by the Playwright testing framework. 
// //test is used to define a test case, and expect is used for assertions within the test case.
test('Locators',async({page})=>{//'Locators' is the name of the test case and then async function is passed as the second argument which contains the code for the test case
    await page.goto("https://demoblaze.com/index.html")
    //locator is the inbuilt function in playwright which is used to find the element on the webpage
    //property, css, xpath
    //ex: <input type="text" name="username" id="username" class="form-control" css="1"><div class="card-body"><h4 class="cardtitle"><a href="#">iPhone 16</a></h4></div>. here there are 4 attributes type, name, id and class
    //if Id is present css-->tagname#id(ex: input#username) or #id(ex: #username)
    //if class attribute is present it's css-->tagname.class(ex: input.form-control) or .class(ex: .form-control) 
    //if any attribute present it's css-->[attribute='value'] (ex: [name='username'])
    //css traversing from parent to child css-->parenttagname>>childtagname  need to get iPhone 16 value then .card-body a or div.card-body a
    //if text is present then text=''
    //remove existing username value say sam2006, use fill("")
    //await is used in lines whenever an action is performed such as click(), fill(), type etc...
    //expect (await page.locator("#terms").isChecked()).toBeFalsy(); Here await is within the action performed isChecked() and toBeFalse is not an action 
    //javaScript is an async language which means each line of code is executed in a random manner and not line by line
    //that's the reason await is used to tell the program to wait for the operation to be executed before proceeding to another line
//this operation returns a promise which can be pending, fulfilled, rejected
    //click on login button --property
   // await page.locator('id=login2').click()
    await page.click('id=login2')//property
        //provide username-CSS

        await page.fill('#loginusername', 'sam2006') //or  await page.locator('#loginusername')//css
        await page.type("input[id='loginpassword']", 'Win123$')

        //click on login button
        await page.click("//button[normalize-space()='Log in']")//xpath
        const logOutLink = await page.locator("//a[@id='logout2']")//xpath
        await expect(logOutLink).toBeVisible()
        await page.close()

})
// const {test, expect}=require('@playwright/test')//test and  expect are the functions provided by the Playwright testing framework.  // //test is used to define a test case, and expect is used for assertions within the test case. test('Locators',async({page})=>{//'Locators' is the name of the test case and then async function is passed as the second argument which contains the code for the test case     await page.goto("https://demoblaze.com/index.html")     //locator is the inbuilt function in playwright which is used to find the element on the webpage     //property, css, xpath     //ex: <input type="text" name="username" id="username" class="form-control" css="1"><div class="card-body"><h4 class="cardtitle"><a href="#">iPhone 16</a></h4></div>. here there are 4 attributes type, name, id and class     //if Id is present css-->tagname#id(ex: input#username) or #id(ex: #username)     //if class attribute is present it's css-->tagname.class(ex: input.form-control) or .class(ex: .form-control)      //if any attribute present it's css-->[attribute='value'] (ex: [name='username'])     //css traversing from parent to child css-->parenttagname>>childtagname  need to get iPhone 16 value then .card-body a or div.card-body a     //if text is present then text=''     //remove existing username value say sam2006, use fill("")     //await is used in lines whenever an action is performed such as click(), fill(), type etc...     //expect (await page.locator("#terms").isChecked()).toBeFalsy(); Here await is within the action performed isChecked() and toBeFalse is not an action      //javaScript is an async language which means each line of code is executed in a random manner and not line by line     //that's the reason await is used to tell the program to wait for the operation to be executed before proceeding to another line //this operation returns a promise which can be pending, fulfilled, rejected     //click on login button --property    // await page.locator('id=login2').click()     await page.click('id=login2')//property         //provide username-CSS          await page.fill('#loginusername', 'sam2006') //or  await page.locator('#loginusername')//css         await page.type("input[id='loginpassword']", 'Win123$')          //click on login button         await page.click("//button[normalize-space()='Log in']")//xpath         const logOutLink = await page.locator("//a[@id='logout2']")//xpath         await expect(logOutLink).toBeVisible()         await page.close()  })
