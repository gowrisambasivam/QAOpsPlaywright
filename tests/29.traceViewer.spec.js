import { test, expect } from '@playwright/test';

test.skip('page screenshot', async ({ page }) => {
    await page.goto("https://demoblaze.com/index.html")
    await page.locator('id=login2').click()
   
        await expect(page.locator('id=loginusername')).toBeVisible()
        
        await expect(page.locator('id=loginusername')).toBeEmpty()
        await expect(page.locator('id=loginusername')).toBeEnabled()
        await page.fill('id=loginusername', 'sam2006') 
         await page.fill('id=loginpassword', 'Win123$') 
      await expect(page.locator('#logout2')).toBeVisible()
}
)