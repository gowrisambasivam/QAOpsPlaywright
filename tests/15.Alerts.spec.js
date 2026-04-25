//playwright automatically dismiss alerts or dialogs
//1.Simple alert: alerts with Ok button 
// 2. Confirmation alert: alerts with confirmations that is ok and cancel button 
// 3. Prompt alert: where the alerts has innput box
const {test, expect}=require('@playwright/test')
test.skip('SimpleAlert@passed', async({page})=>
{
await page.goto('https://testautomationpractice.blogspot.com/')

//enable dialod window handler before the action that triggers the alert
await page.on('dialog', async dialogvariable=>{
expect(dialogvariable.type()).toContains('alert').toBeTruthy()
expect(dialogvariable.message()).toBe('I am an alert box!')
await dialogvariable.accept()//to click on ok button this is changed in local
}
)
await page.click('id=alertBtn')
await page.waitForTimeout(3000)

}
)
test('ConfirmationAlert@passed', async({page})=>
{
await page.goto('https://testautomationpractice.blogspot.com/')

//enable dialog window handler before the action that triggers the alert
await page.on('dialog', async dialogvariable=>{
expect(dialogvariable.type()).toBe('confirm')
expect(dialogvariable.message()).toBe('Press a button!')
await dialogvariable.accept()//to click on ok button
}
)
await page.click("//button[@id='confirmBtn']")
await page.waitForTimeout(3000)

}
)