/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let firstStr = strs.shift()
  let len = firstStr.length
  let prefix = ''
  let result = ''

  for (let i = 0; i < len; i++) {
    prefix = firstStr[i]
    let isSame = strs.every(s => s.charAt(i) === prefix)
    if (isSame) result = result.concat(prefix)
  }

  return result
};




longestCommonPrefix(["flower", "flow", "flight"])