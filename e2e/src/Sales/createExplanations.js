var createTestExplanation = require('./createExplanation.po.js');

describe('Protractor Create Explanations', function() {

    var createExplanation = new createTestExplanation();
    var width = 1800;
    var height = 1500;
    var user = 'omar@gmail.com';
    var password = 'Password1!';
    var newExplanations = 'This test Protactor Create new Explanation';

    it('should display message for invalid credentials', function() {

        // open browser
        createExplanation.get();
        createExplanation.sleepPageObecjt();
        createExplanation.setOpenBrowser(width, height);
        createExplanation.sleepPageObecjt();
        createExplanation.setUserName(user);
        createExplanation.setPasswordName(password);
        createExplanation.loginButton();
        expect(createExplanation.getTitleWeb()).toEqual('Social Enterprise Technology');
    });


    it('Should create an explanations', function() {

        // Create New explanation
        createExplanation.openExplanations();
        expect(createExplanation.getTitleExplanations()).toEqual('Explanations');
    });

    it('Should create an edit new explanation', function() {

         createExplanation.sleepPageObecjt();
         createExplanation.clickExplanations();
         createExplanation.sleepPageObecjt();
         createExplanation.writteNewExplanations(newExplanations);
         createExplanation.sleepPageObecjt();
         createExplanation.clickSaveExplanations();
         createExplanation.sleepPageObecjt();


    });

    it('Should leave create new explanation', function() {
        createExplanation.leaveNewExplanations();
        createExplanation.sleepPageObecjt();
        expect(createExplanation.getTitleWeb()).toEqual('Social Enterprise Technology');
    });

});