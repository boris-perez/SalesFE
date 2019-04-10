var machines = function() {

    var machine  = element(by.id('machines'));
    var newMachine = element(by.id('newMachine'));
    var name = element(by.id("name"));
    var mark = element(by.id("mark"));
    var model = element(by.id("model"));
    var capacity = element(by.id("capacity"));
    var price = element(by.id("price"));
    var description = element(by.id('description'));
    var submit = element(by.id('submit'));
    var medium = element(by.valueOf('MEDIUM'));

    this.get = function() {
        browser.get('localhost:4200/home');
    };
    this.machine =function () {
        machine.click();
    };
    this.newMachine=function () {
        newMachine.click();
    };
    this.name=function (names) {
        name.sendKeys(names);
    };
    this.mark=function (marks) {
        mark.sendKeys(marks);
    };
    this.model = function (models) {
        model.sendKeys(models);
    };
    this.capacity=function () {
        capacity.click();
    };
    this.medium=function (){
      medium.click();
    };
   this.price=function (prices) {
        price.sendKeys(prices);
    };
    this.description= function (descriptions) {
        description.sendKeys(descriptions);
    };
    this.submit=function () {
        submit.click();
    };
    this.sleepPageObecjt = function () {
        browser.sleep('3000');
    }
};
module.exports = createMachine
