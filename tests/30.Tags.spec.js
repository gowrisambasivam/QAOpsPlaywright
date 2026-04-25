import { test, expect } from '@playwright/test';

test('tagging1@smoke', async ({ page }) => {
  console.log('This is my test1 of smoke test')
}
)
test('tagging2@smoke', async ({ page }) => {
  console.log('This is my test2 of smoke test')
}
)
test('tagging3@reg', async ({ page }) => {
  console.log('This is my test1 of reg test')
}
)
test('tagging4@reg', async ({ page }) => {
  console.log('This is my test2 of reg test')
}
)
test('tagging5@smoke@reg', async ({ page }) => {
  console.log('This is my testA of smoke and reg test')
}
)