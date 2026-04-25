import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/loginPage.js'
test('pageObjectModelLogin', async ({ page }) => {
    //Login
    const login=new LoginPage(page); 
    await login.gotoLoginPage();
    await login.login('sam2006','Win123$')


}
)