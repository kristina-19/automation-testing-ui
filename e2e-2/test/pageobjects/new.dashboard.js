const Page = require('./page.js');

class newDashboardPage extends Page {

    get noWidgetsText() {
        return $('.emptyWidgetGrid__empty-widget-headline--ZocRI');
    }

    get btnEdit() {
        return $('');
    }
}

module.exports = new newDashboardPage();