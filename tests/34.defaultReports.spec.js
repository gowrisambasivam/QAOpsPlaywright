//Default reports and third party reports 
//List Reported
//Line Reporter
//Dot Reporter
//HTML Reporter
//JSON Reporter
//JUnit Reporter
//Use the above reporters in 2 different ways a. Configuration b. Command in Terminal
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