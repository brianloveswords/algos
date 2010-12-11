// String Distance
//
// Developed by Brian J. Brennan 
// Copyright (c) 2010
// MIT license

// Compute a modified Hamming distance. The standard Hamming distance requires
// the strings to be the same length. This version can take strings of any
// size and applies the difference in length to the distance, so `ham` and
// `hamsled` will have a distance of 4.
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
