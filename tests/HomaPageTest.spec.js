const {test, expect}=require('@playwright/test')//require is a function in Node.js that is used to import modules.
//  In this case, it is importing the 'test' and 'expect' functions from the '@playwright/test' module, which is a testing framework for Playwright.

test('Home Page', async({page})=>{//here page is an object that represents a single tab or window in the browser.
//  It provides methods to interact with the web page, such as navigating to a URL, clicking on elements, filling out forms, etc.

//page is not a function, but it's a parameter that is passed to the test function. A fixture is automatically created by Playwright and is passed into your test functions as an
// javascript is an asynchronous language so all test steps will be executed in parallel. But, for us our test step1 needs to be completed before test step 2 and so on. 
//to handle step by step execution we need to handle javascript promises. Async and await are used to handle promises in JavaScript.
//async keyword is used before a function to indicate that it is an asynchronous function, which means it can contain asynchronous operations and can use the await keyword
//  to wait for those operations to complete before proceeding with the next line of code.
//async keyword will make the function to return a promise and await keyword is used to wait for a promise to resolve before moving on to the next line of code. 
// It allows you to write asynchronous code in a more synchronous and readable manner.
//page.goto will wait till the url is loaded and then it will move to the next line of code. If we do not use await keyword then it will not wait for the url to load and it will move to the next line of code which may cause error because the elements on the page may not be available yet.
await page.goto("https://demoblaze.com/index.html")//goto is a method of the page fixture that is used to navigate to a specific URL. 

const pageTitle=await page.title();
console.log(pageTitle);
expect(pageTitle).toBe('STORE')
const pageURL=await page.url()
console.log('Page url is:', pageURL)
await expect(pageURL).toBe('https://demoblaze.com/index.html')
await page.close()
})