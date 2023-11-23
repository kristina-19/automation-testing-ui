const Page = require('./page.js');

class DashboardPage extends Page {

    get addnewDashboard() {
        return $('.ghostButton__text--SjHtK');
    }

    get noWidgetsOnDashboardText() {
        return $('.emptyWidgetGrid__empty-widget-headline--ZocRI');
    }

    async clickAddnewDashboardBtn() {
        (await this.addnewDashboard).click();
    }
}

module.exports = new DashboardPage();