/**
 * https://leetcode.com/problems/keyboard-row/
 * 
 * @param {string[]} words
 * @return {string[]}
 */
function findWords2(words) {
  let map = {
    1: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    2: ["a", "s", "d", "f", "g", "h", "j", "k", "l", ],
    3: ["z", "x", "c", "v", "b", "n", "m"]
  }
  let res = []

  for (let i = 0, len = words.length; i < len; i++) {
    if (onOneRow(words[i])) res.push(words[i])
  }

  function onOneRow(word) {
    word = word.toLowerCase()
    let row = 0
    for (key in map) {
      if (map[key].includes(word[0])) row = key
    }
    for (let i = 1, len = word.length; i < len; i++) {
      if (!map[row].includes(word[i])) return false
    }
    return true
  }
  return res
}

var findWords = function (words) {
  // 0-9 10-18 19-25
  let dict = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]
  let res = []
  for (let i = 0, len = words.length; i < len; i++) {
    if (onOneRow(words[i])) res.push(words[i])
  }

  return res

  function onOneRow(word) {
    word = word.toLowerCase()
    let flag = null
    for (let i = 0, len = word.length; i < len; i++) {
      let tmp = dict.indexOf(word[i])
      tmp = tmp - 9 <= 0 ? 1 : tmp - 18 <= 0 ? 2 : 3
      if (flag) {
        if (flag !== tmp) return false
      } else {
        flag = tmp
      }
    }
    return true
  }
};



console.log(
  findWords2(["asdfghjkl", "qwertyuiop", "zxcvbnm"])
);