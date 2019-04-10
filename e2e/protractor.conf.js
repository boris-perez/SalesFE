// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['src/Machine/createMachine.js'
   // 'editExplanation/editExplanations.js',
  //  'deleteExplanations/deleteExplanations.js'
  ]
};
