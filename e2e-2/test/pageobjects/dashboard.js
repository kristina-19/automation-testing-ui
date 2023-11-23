const Page = require('./page.js');

class DashboardPage extends Page {

    get btnAddnewDashboard() {
        return $("//*[text()='Add New Dashboard']");
    }

    get btnDelete() {
        return $("//*[text()='Delete']");
    }

    get btnEdit() {
        return $("//*[text()='Edit']");
    }

    get btnAddWiget() {
        return $("//*[text()='Add new widget']");
    }

    get noWidgetsOnDashboardText() {
        return $('.emptyWidgetGrid__empty-widget-headline--ZocRI');
    }

    async clickAddnewDashboardBtn() {
        (await this.btnAddnewDashboard).click();
    }

    async clickDeleteBtn() {
        (await this.btnDelete).click();
    }

    async clickEditBtn() {
        (await this.btnEdit).click();
    }

    async clickAddWidgetBtn() {
        (await this.btnAddWidget).click();
    }
}

module.exports = new DashboardPage();