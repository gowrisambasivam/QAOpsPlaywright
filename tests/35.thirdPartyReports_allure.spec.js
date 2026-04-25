//3rd party reports
//Allure Reported--most popular
//Monocart Reporter
//Tesults Reporter
//ReportPortal Reporter
//Current Reporter
//Serenity Reporter
//Use the above reporters in 2 different ways a. Configuration b. Command in Terminal
//1) Install the allure-playwright module: npm i -D @playwright/test allure-playwright
//2) Install Allure command line Documentation: https://www.npmjs.com/package/allure-commandline (npmjs.com in Bing) npm install -g allure-commandline --save-dev
//3 Update playwright.config.js
//Option A:reporter: [['allure-playwright', { outputFolder: 'my-allure-results' }]]
//Option B:Code npx playwright test --reporter=allure-playwright
// 4) Run the tests
//5) Generate Allure Report
//allure generate my-allure-results -o allure-report --clean
//allure open allure-report 

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