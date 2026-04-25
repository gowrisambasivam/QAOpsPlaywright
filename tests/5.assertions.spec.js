//An assertion is a statement using expect() that verifies your application behaves the way you expect.
/*
await expect(page).toHaveTitle()	Page has a title
await expect(page).toHaveURL()	Page has a URL
await expect(locator).toBeVisible()	Element is visible
await expect(locator).toBeEnabled()	Element is enabled
await expect(locator).toBeChecked()	Checkbox is checked
await expect(locator).toHaveAttribute()	Element has a DOM attribute
await expect(locator).toHaveText()	Element matches text
await expect(locator).toContainText()	Element contains text
await expect(locator).toHaveValue()	Input has a value
await expect(locator).toHaveCount()	List has exact number of children
await expect(locator).toBeAttached()	Element is attached
await expect(locator).toBeDisabled()	Element is disabled
await expect(locator).toBeEditable()	Element is editable
await expect(locator).toBeEmpty()	Container is empty
await expect(locator).toBeFocused()	Element is focused
await expect(locator).toBeHidden()	Element is not visible
await expect(locator).toBeInViewport()	Element intersects viewport
await expect(locator).toContainClass()	Element has specified CSS classes
await expect(locator).toHaveAccessibleDescription()	Element has a matching accessible description
await expect(locator).toHaveAccessibleName()	Element has a matching accessible name
await expect(locator).toHaveClass()	Element has specified CSS class property
await expect(locator).toHaveCSS()	Element has CSS property
await expect(locator).toHaveId()	Element has an ID
await expect(locator).toHaveJSProperty()	Element has a JavaScript property
await expect(locator).toHaveRole()	Element has a specific ARIA role
await expect(locator).toHaveScreenshot()	Element has a screenshot
await expect(locator).toHaveValues()	Select has options selected
await expect(locator).toMatchAriaSnapshot()	Element matches the Aria snapshot
await expect(page).toHaveScreenshot()	Page has a screenshot
await expect(response).toBeOK()	Response has an OK status
Non-retrying assertions
These assertions allow to test any conditions, but do not auto-retry. Most of the time, web pages show information asynchronously, and using non-retrying assertions can lead to a flaky test.
Prefer auto-retrying assertions whenever possible. For more complex assertions that need to be retried, use expect.poll or expect.toPass.
Assertion	Description
expect(value).toBe()	Value is the same
expect(value).toBeCloseTo()	Number is approximately equal
expect(value).toBeDefined()	Value is not undefined
expect(value).toBeFalsy()	Value is falsy, e.g. false, 0, null, etc.
expect(value).toBeGreaterThan()	Number is more than
expect(value).toBeGreaterThanOrEqual()	Number is more than or equal
expect(value).toBeInstanceOf()	Object is an instance of a class
expect(value).toBeLessThan()	Number is less than
expect(value).toBeLessThanOrEqual()	Number is less than or equal
expect(value).toBeNaN()	Value is NaN
expect(value).toBeNull()	Value is null
expect(value).toBeTruthy()	Value is truthy, i.e. not false, 0, null, etc.
expect(value).toBeUndefined()	Value is undefined
expect(value).toContain()	String contains a substring
expect(value).toContain()	Array or set contains an element
expect(value).toContainEqual()	Array or set contains a similar element
expect(value).toEqual()	Value is similar - deep equality and pattern matching
expect(value).toHaveLength()	Array or string has length
expect(value).toHaveProperty()	Object has a property
expect(value).toMatch()	String matches a regular expression
expect(value).toMatchObject()	Object contains specified properties
expect(value).toStrictEqual()	Value is similar, including property types
expect(value).toThrow()	Function throws an error
*/
/*
const {test, expect}=require('@playwright/test')
const { waitForDebugger } = require('node:inspector')
test('LocatorMultipleElements',async({page})=>{

 await page.goto("https://demo.nopcommerce.com/register")

 await expect(await page).toHaveURL("https://demo.nopcommerce.com/register")
 
 await page.click('.cb-lb-t')
 await page.click('.cb-lb-t')
 await page.waitForTimeout(10000)

  await expect(await page).toHaveTitle("nopCommerce demo store. Register")
  const npLogo=await page.locator('.header-logo')
  await expect(npLogo).toBeVisible()
  const searchStore=await page.locator('id=small-searchterms')
  await expect(searchStore).toBeEnabled()
  await page.click('id=gender-male')
  await expect(await page.locator('id=gender-male')).toBeChecked()
 // await page.getByLabel('Newsletter')
  await expect(await page.locator('id=NewsLetterSubscriptions_0__IsActive')).toBeChecked()
  await expect(await page.locator('id=register-button')).toHaveAttribute('type', 'submit')
  await expect(await page.locator('.page-title h1')).toHaveText('Register')//full text
  await expect(await page.locator('.page-title h1')).toContainText('Reg')//partial value
  await page.locator("//input[@id='Email']").fill('abc@gmail.com')
  await expect(await page.locator("//input[@id='Email']")).toHaveValue('abc@gmail.com')
await page.getByRole('button',{name:'Books'}).click()
await page.goto("https://demo.nopcommerce.com/bookss")
waitForDebugger()
await expect(await page.locator('id=products-pagesize')).toHaveCount(3);
}
)
*/