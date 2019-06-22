/**
 * @param {string} s
 * @return {number}
 * 
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 */
var romanToInt = function (s) {
  let dict = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  let result = 0;
  let len = s.length;

  for (let i = 0; i < len; i++) {
    let cur = dict[s[i]]
    let next = dict[s[i + 1]]
    if (cur < next) {
      result = result + (next - cur)
      i = i + 1
    } else {
      result = result + cur
    }
  }
  return result;
};

romanToInt('IX') //1994

// M    CM  XC IV
// 1000 900 90 4