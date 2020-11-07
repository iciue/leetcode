/*
 * @lc app=leetcode id=1002 lang=javascript
 *
 * [1002] Find Common Characters
 *
 * https://leetcode.com/problems/find-common-characters/description/
 *
 * Given an array A of strings made only from lowercase letters, return a list
 * of all characters that show up in all strings within the list (including
 * duplicates).  For example, if a character occurs 3 times in all strings but
 * not 4 times, you need to include that character three times in the final
 * answer.
 * 
 * You may return the answer in any order.
 */
/**
 * @param {string[]} A
 * @return {string[]}
 */


var commonChars = function (A) {
  let res = A[0].split('')
  for (let i = 1, len = A.length; i < len; i++) {
    A[i] = A[i].split('')
    res = isCommon(res, A[i])
  }
  return res

  function isCommon(char, currChar) {
    let res = []
    for (const letter of char) {
      let index = currChar.indexOf(letter)
      if (index != -1) {
        res.push(...currChar.splice(index, 1))
      }
    }
    return res
  }
}

var commonChars2 = function (A) {
  let map = {}
  let res = []
  for (let i = 0, len = A.length; i < len; i++) {
    for (let j = 0, len2 = A[i].length; j < len2; j++) {
      let letter = A[i][j]
      if (map[letter]) {
        if (map[letter][i]) {
          map[letter][i]++
        } else {
          map[letter][i] = 1
        }
      } else {
        map[letter] = []
        map[letter][i] = 1
      }
    }
  }
  for (key in map) {
    if (map[key].some(v => v === undefined)) continue
    if (map[key].length === A.length) {
      for (let i = 0; i < Math.min(...map[key]); i++) {
        res.push(key)
      }
    }
  }
  return res
};

commonChars(["acabcddd", "bcbdbcbd", "baddbadb", "cbdddcac", "aacbcccd", "ccccddda", "cababaab", "addcaccd"])
commonChars(["bella", "label", "roller"])