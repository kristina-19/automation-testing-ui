const Page = require('./page.js');

class AddNewDashboardMadal extends Page {

    get dashboardName() {
        return $('.input__input--iYEmM[type=text]');
    }

    get btnAdd() {
        return $('button.bigButton__big-button--BmG4Q.bigButton__color-booger--EpRlL');
    }

    async enterNameandClickBtn(newName) {
        await this.dashboardName.setValue(newName);
        await this.btnAdd.click();

    }
}

module.exports = new AddNewDashboardMadal();