//race condition happens when you run multiple similar tests parallelly. So one test is getting confused for another. Hence retries help
//A race condition in Playwright is when your test checks something before the application is ready, causing flaky or inconsistent results. It happens when you use immediate DOM reads instead of Playwright’s auto‑waiting assertions.
//(Document Object Model) — things like text, attributes, visibility, count, or state.

//These operations do not wait for the UI to finish updating, which is why they often cause race conditions.

//Any method that retrieves information from the page instead of interacting with it.

//expect(await locator.textContent()).toBe('Success'); ---bad
//await expect(locator).toHaveText('Success');--good

//await page.click('#save');expect(await locator.textContent()).toBe('Success');---bad
//await expect(locator).toHaveText('Success');--good
//auto-wait does work only on action methods and not on methods that render data from UI such as toBe(), textContent(),getAttribute()
import { test, expect } from '@playwright/test';

test('Report 1', async ({ page }) => {
  console.log('This is my report 1')
}
)
test('Report 2', async ({ page }) => {
  console.log('This is my report 2')
}
)
test('Report 3', async ({ page }) => {
  console.log('This is my report 3')
}
)