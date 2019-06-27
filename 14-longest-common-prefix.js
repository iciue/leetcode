/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return ""
  if (strs.length === 1) return strs[0]
  let firstStr = strs.shift()
  let prefix = ''


  for (let i = 0, len = firstStr.length; i < len; i++) {
    let s = firstStr[i]
    let isSame = strs.every(str => s === str[i])
    if (!isSame) break
    prefix += s
  }
  return prefix
};


console.log(
  longestCommonPrefix(["aca", "aba", "acc"])
);