/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams2 = function (strs) {
  let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103]
  let map = {}
  let res = []

  for (let i = 0, len = strs.length; i < len; i++) {
    let flag = isAnagrams(strs[i])
    if (flag in map) {
      map[flag].push(strs[i])
    } else {
      map[flag] = []
      map[flag].push(strs[i])
    }
  }
  for (const key in map) {
    res.push(map[key])
  }

  return res

  function isAnagrams(str) {
    let flag = 1
    for (let i = 0, len = str.length; i < len; i++) {
      let idx = str.charCodeAt(i) - 97
      flag *= primes[idx]
    }
    return flag
  }
}



var groupAnagrams = function (strs) {
  let map = {}
  let res = []

  for (let i = 0, len = strs.length; i < len; i++) {
    let flag = isAnagrams(strs[i])
    if (flag in map) {
      map[flag].push(strs[i])
    } else {
      map[flag] = []
      map[flag].push(strs[i])
    }
  }
  for (const key in map) {
    res.push(map[key])
  }

  return res

  function isAnagrams(str) {
    let ary = str.split('')
    ary.sort((a, b) => a.charCodeAt() - b.charCodeAt())
    return ary.join('')
  }
};

groupAnagrams2(["eat", "tea", "tan", "ate", "nat", "bat"])
// groupAnagrams(["cab", "tin", "pew", "duh", "may", "ill", "buy", "bar", "max", "doc"])