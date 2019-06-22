/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let openingBracketCode = [40, 91, 123] // ( [ { 
  let closingBracketCode = [41, 93, 125] // ) ] }
  let count = []

  for (let i = 0, len = s.length; i < len; i++) {
    // 123 123
    let curr = s[i].charCodeAt()
    if (openingBracketCode.includes(curr)) {
      count.push(curr)
    }
    if (closingBracketCode.includes(curr)) {
      let shouldSlice = count.slice(-1)
      if ((curr - shouldSlice) > 2 || (curr - shouldSlice) < 0) {
        count.push(curr)
        break
      }
      count.pop()
    }
  }
  return count.length === 0 ? true : false;
}

console.log(isValid(""));

// 2.0 
// 参考自: https://leetcode.com/problems/valid-parentheses/discuss/9457/8-lines-in-javascript

var isValid2 = function (s) {
  let st = []
  for (let l of s) {
    let bracketIdx = "({[]})".indexOf(l)
    if (bracketIdx > -1) {
      // console.log(st);
      if (st[bracketIdx] === 5) st.length--;
      else st.push(bracketIdx)
    }
    console.log(st.length === 0);
    return st.length === 0
  }
}

// console.log(isValid2("{()}"));
isValid2("{([)]}((()))")