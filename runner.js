var assert = require("assert");

exports['test'] = function(suite, tests){
  console.log('Running', suite, 'tests');
  tests(assert);
};
