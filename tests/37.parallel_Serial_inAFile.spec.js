//parallel mode is used when you need your test cases to run parallely on a file
// serial mode is used to tell playwright to stop execution if any of the test cases fails in the file. 
// There is no point in executing the next test case as it's dependant on the previous test case


import { test, expect } from '@playwright/test';
//test.describe.configure({mode:'serial'});
test.describe.configure({mode:'parallel'});
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