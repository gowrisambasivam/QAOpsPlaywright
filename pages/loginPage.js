exports.LoginPage=
class loginPage{

    constructor(page)
    {//all the elements are described here
        this.page=page;
        this.loginLink="#login2"
        this.usernameInput='#loginusername'
        this.passwordInput='#loginpassword'
        this.loginButton='//button[normalize-space()="Log in"]'
    }
    async gotoLoginPage(){//method1
        await this.page.goto('https://demoblaze.com/index.html')
    }
    async login(username,password)
    {//method
        await this.page.click(this.lognLink);
        await this.page.fill(this.usernameInput);
        await this.page.fill(this.passwordInput);
        await this.page.click(this.loginButton);
    }
}