/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  if (s.length === 0) return -1
  if (s.length === 1) return 0

  for (let i = 0, len = s.length; i < len; i++) {
    let str = s[i]
    let firstIdx = s.indexOf(str)
    let lastIdx = s.lastIndexOf(str)
    if (firstIdx === lastIdx) return i
  }
  return -1
};


console.log(
  firstUniqChar("aa")
);