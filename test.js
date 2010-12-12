var run = require("./runner");
var dist = require("./distance");

run.test('Hamming', function(t){
  t.equal(dist.hamming('awesome', 'aewsome'), 2);
  t.equal(dist.hamming('a', 'ba'), 2);
  t.equal(dist.hamming('cab', 'abra'), 4);
});

run.test("Jaro", function(t){
  // tests shameleslly ripped from the wikipedia article
  t.equal(dist.jaro('great', 'great'), 1);
  t.equal(dist.jaro('dicksonx', 'dixon'), (1/3)*(4/5+4/8+1));
  t.equal(dist.jaro('martha', 'marhta'), (1/3)*(1+1+5/6));
  t.equal(dist.jaro('duane', 'dwayne'), (1/3)*(4/6+4/5+1));
  t.equal(dist.jaro('jones', 'johnson'), (1/3)*(4/5+4/7+1));
  t.equal(dist.jaro('abc', 'def'), 0);
});

run.test("Jaro-Winkler", function(t){
  var f = function(distance, prefix) {
    return distance + (prefix * 0.1 * (1 - distance));
  };
  var affirm = function(str1, str2, prefix){
    var d = dist.jaro(str1, str2);
    t.equal(dist.jarowinkler(str1, str2), f(d,prefix));
  };
  
  affirm('dicksonx', 'dixon', 2);
  affirm('martha', 'marhta', 3);
  affirm('duane', 'dwayne', 1);
  affirm('jones', 'johnson', 2);
});
