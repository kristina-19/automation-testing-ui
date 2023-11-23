const { $ } = require('@wdio/globals');
const Page = require('./page.js');
const logger = require('../../utils/logger.js');
const winston = require('winston');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    
    get login() {
        return $('input[type="text"]');
    }

    get password() {
        return $('input[type="password"]');
    }

    get btnLogin() {
        return $('button.bigButton__big-button--BmG4Q[type=submit]');
    }

    set loginInput(userlogin) {
        this.login.setValue(userlogin)
    }

    set passwordInput(userpassword) {
        this.password.setValue(userpassword)
    }

    async loginToPortal(userlogin, userpassword) {
        await this.login.setValue(userlogin);
        logger.info(`entered userlogin: ${userlogin}`);
        await this.password.setValue(userpassword);
        logger.info(`entered userpassword: ${userpassword}`);
        await this.btnLogin.click();
    }

    async open(path){
        await browser.url(`http://localhost:8080/ui/#default_personal/dashboard/${path}`);
    }
}

module.exports = new LoginPage();
