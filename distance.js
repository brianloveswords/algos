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

var jaro = function(str1, str2){
  var len1 = str1.length,
      len2 = str2.length,
      max = Math.max(len1, len2),
      frame = Math.floor(max/2 - 1),
      match_string1 = '',
      match_string2 = '',
      matches = 0,
      transpositions = 0;

  var get_match_string = function(string1, string2) {
    var result = '';
    for (var i=0; i < string1.length; i++) {
      var chr1 = string1[i],
          chr2 = string2[i];
      
      if (chr1 == chr2) {
        result += chr1;
      }
      
      else {
        for (var j=-(frame); j <= frame; j++) {
          var pos = i + j;
          if (pos < 0) { continue; }
          if (chr1 == string2[pos]) {
            result += chr1;
          }
        }
      }
    }
    return result;
  };
  
  match_string1 = get_match_string(str1, str2);
  match_string2 = get_match_string(str2, str1);

  matches = Math.min(match_string1.length, match_string2.length);
  transpositions = hamming(match_string1, match_string2)/2;
  
  return (1/3) * (matches/len1 + matches/len2 + (matches - transpositions)/matches);
};

exports['hamming'] = hamming;
exports['jaro'] = jaro;
