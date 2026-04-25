// Reference : https://playwright.dev/docs/input#upload-files

const { test, expect } = require('@playwright/test')

test.skip('Single File', async ({ page }) => {
    await page.goto('https://www.foundit.in/')
    await page.waitForSelector('.mqfihd-upload')
    await page.locator('.mqfihd-upload').click()
    await page.locator('#file-upload').setInputFiles('tests\testfile.pdf')
    //removing files    await page.locator('#file-upload').setInputFiles([])
    await page.waitForTimeout(5000)
})

// test('Multiple Files', async ({ page }) => {

    test.skip('Multiple Files', async ({page})=>{
  await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

  await page.locator('#filesToUpload')
    .setInputFiles([
      'tests\testfile.pdf',
      'tests\testfile.pdf'
    ]);

  await page.waitForTimeout(3000)
})