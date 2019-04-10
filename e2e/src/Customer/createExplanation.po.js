var createExplanation = function() {

    var username = element(by.name('username'));
    var password = element(by.name('password'));
    var newExplanation = element(by.css("div[class^='expl-content-editable-text']"));
    var titleExplanation = element(by.css("span[class^='expl-icon-detail-title-right scc-ui-txt-align-left scc-ui-txt-ellipsis']"));
    var titleWeb = element(by.css("h1[class^='showcase-form-header']"));
    var letterBlack = element(by.css("button[class^='scc-ui-link-icon expl-stacked-card-btn-bold expl-stacked-card-btn-notice-new ng-tns-c30-136 ng-star-inserted']"));

    var openNewExplanation = element(by.css('#EXPLANATION_my_resource001'));
    var clickNewExplanation = element(by.css('.expl-icon-detail-action-hover'));
    var clickSaveExplanation = element(by.css("button[class^='scc-ui-link-icon scc-ui-link-accent-second-new expl-stacked-card-button-check']"));
    var leaveNewExplanations = element(by.css("h1[class^='showcase-form-header']"));
    var loginButton = element(by.buttonText('Login'));



    this.get = function() {
        browser.get('http://172.16.4.88:8000/login');
    };

    this.loginButton=function () {
        loginButton.click();
    };

    this.openExplanations=function () {
        openNewExplanation.click();
    };
    this.clickExplanations=function () {
        clickNewExplanation.click();
    };
    this.clickSaveExplanations=function () {
        clickSaveExplanation.click();
    };

    this.leaveNewExplanations=function () {
        leaveNewExplanations.click();
    };

    this.writteNewExplanations=function (textExplanations) {
        newExplanation.sendKeys(textExplanations);
    };
    this.setOpenBrowser=function(width, height) {
        browser.driver.manage().window().setSize(width, height);
    };

    this.setUserName = function(user) {
        username.sendKeys(user);
    };
    this.setPasswordName = function(passwordUser) {
        password.sendKeys(passwordUser);
    };
    this.getTitleExplanations = function () {
        return  titleExplanation.getText();
    };
    this.getTitleWeb = function () {
        return  titleWeb.getText();
    };

    this.getLetterBlack = function () {
        return  letterBlack.getText();
    };

    this.sleepPageObecjt = function () {
        browser.sleep('3000');
    }
};
module.exports = createExplanation