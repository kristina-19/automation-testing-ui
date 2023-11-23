const LoginPage = require('../pageobjects/login.page.js');
const DashboardPage = require('../pageobjects/dashboard.js');
const AddNewDashboardModal = require('../pageobjects/add.new.dashboard.modal.js');
const DeleteDashboardModal = require('../pageobjects/delete.dashboard.modal.js');
const { generateString } = require('../../utils/create.data.js'); 



describe('Login and Create dashboard', ()  => {
    it('sould open Report portal', async () => {
     //await LoginPage.open();
     await browser.url(`http://localhost:8080/ui/#default_personal/dashboard/`);
     await LoginPage.loginToPortal('default', '1q2w3e');

    });

    it('should create new dashboard', async () => {
        await DashboardPage.clickAddnewDashboardBtn();
        let dashboardName = `${generateString(5)}`;
        await AddNewDashboardModal.enterNameandClickBtn(dashboardName);
        await expect(DashboardPage.noWidgetsOnDashboardText).toBeExisting()
        await expect(DashboardPage.noWidgetsOnDashboardText).toHaveTextContaining(
            'There are no widgets on this dashboard');
    });

    it('should edit dashboard', async () => {
        await DashboardPage.clickEditBtn();
        let dashboardName = `${generateString(5)}`;
        await AddNewDashboardModal.enterNameandClickBtn(dashboardName);
    });

    it('should delete dashboard', async () => {
        await DashboardPage.clickDeleteBtn();
        await DeleteDashboardModal.clickDeleteBtn();
    })

});
