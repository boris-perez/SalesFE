//var machines = require('/createMachine.po.js');
var machines = require('./createMachine.po');

describe('Protractor Create Explanations', function() {

    var machine = new machines();

    it('should go to the Machine section', function() {

        // open browser
        machine.get('localhost:4200/home');
        machine.sleepPageObecjt();
        machine.machine();
        machine.sleepPageObecjt();
        machine.newMachine();
        machine.sleepPageObecjt();
        //expect(machine.getTitleWeb()).toEqual('Social Enterprise Technology');
    });

    it('Should create new machine', function() {

        // Create New machine
        machine.name(Boris);
        machine.sleepPageObecjt();
        machine.mark(Boris);
        machine.sleepPageObecjt();
        machine.model(Boris);
        machine.sleepPageObecjt();
        machine.capacity();
        machine.sleepPageObecjt();
        machine.medium();
        machine.sleepPageObecjt();
        machine.price(500);
        machine.sleepPageObecjt();
        machine.description(test);
        machine.sleepPageObecjt();
        //expect(machine.getTitleExplanations()).toEqual('Explanations');
    });

});
