let delay = 3000; // 3 seconds delay
let Utils = require('./Utils');

describe('Upload file anh sai duong dan', function () {
    describe('Module Quan ly benh nhan', function () {
        describe('Them moi benh nhan', function () {
            it('Dang nhap voi tai khoan '+ Cypress.env("USER_AGENCY"), function () {
                Utils.logIn(Cypress.env("USER_AGENCY"), Cypress.env("PASSWORD_FOR_USER_AGENCY"));
            })
            it('Den module', function () {
                Utils.goToModule('URL_ADD_NEW_PATIENT');
            })
            it('Nhap cac thong tin day du va hop le', function () {
                Utils.enterRightInfoToEditPatientInfo(true);
            })

            it ('Click Save', function () {
                cy.get('button[type=submit]').first().click();
                cy.wait(delay);
                // check result
                cy.get('div[ng-switch]')
                    .find('.toast-message')
                    // .should('contain', "Cập nhật thông tin thành công");
                    .should('contain', "Tạo mới thành công");
            })
        })
    })

})

