var hamming = function(str1, str2){
  var dist = 0,
      big = str1,
      small = str2;
  if (str2.length > str1.length) {
    big = str2;
    small = str1;
  }
  dist = big.length - small.length;
  for (var i=0; i < small.length; i++) {
    if (small[i] != big[i]) { dist +=1; }
  }
  return dist;
};

exports['hamming'] = hamming;
