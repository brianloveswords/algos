var assert = require("assert");
var dist = require("./distance");

assert.equal(dist.hamming('awesome', 'aewsome'), 2);
assert.equal(dist.hamming('a', 'ba'), 2);
assert.equal(dist.hamming('cab', 'abra'), 4);

// tests shameleslly ripped from the wikipedia article
assert.equal(dist.jaro('great', 'great'), 1);
assert.equal(dist.jaro('dicksonx', 'dixon'), (1/3)*(4/5+4/8+1));
assert.equal(dist.jaro('martha', 'marhta'), (1/3)*(1+1+5/6));
assert.equal(dist.jaro('duane', 'dwayne'), (1/3)*(4/6+4/5+1));
assert.equal(dist.jaro('jones', 'johnson'), (1/3)*(4/5+4/7+1));

// testing jarowinkler
(function(){
  var f = function(distance, prefix) {
    return distance + (prefix * 0.1 * (1 - distance));
  };
  
  var test = function(str1, str2, prefix){
    var d = dist.jaro(str1, str2);
    assert.equal(dist.jarowinkler(str1, str2), f(d,prefix));
  };
  
  test('dicksonx', 'dixon', 2);
  test('martha', 'marhta', 3);
  test('duane', 'dwayne', 1);
  test('jones', 'johnson', 2);
})();
