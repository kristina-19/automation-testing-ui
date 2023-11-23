const Page = require('./page.js');

class DeleteDashboardModal extends Page {

    get btnDelete() {
        return $('button.bigButton__big-button--BmG4Q.bigButton__color-tomato--jXOiC');
    }

    async clickDeleteBtn() {
        await this.btnDelete.click();

    }
}

module.exports = new DeleteDashboardModal();