var assert = require("assert");
var dist = require("./distance");

assert.equal(dist.hamming('awesome', 'aewsome'), 2);
assert.equal(dist.hamming('a', 'ba'), 2);
assert.equal(dist.hamming('cab', 'abra'), 4);
