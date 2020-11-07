/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 * a ^ a = 0
 * a ^ 0 = a
 */


var findTheDifference = function (s, t) {
  let sortedS = s.split('').sort()
  let sortedT = t.split('').sort()

  for (let i = 0, len = sortedT.length; i < len; i++) {
    if (sortedS[i] !== sortedT[i]) return sortedT[i]
  }

}

var findTheDifference = function (s, t) {
  let r = 0

  for (let i = 0, len = s.length; i < len; i++) {
    r ^= s.charCodeAt(i)
  }

  for (let i = 0, len = t.length; i < len; i++) {
    r ^= t.charCodeAt(i)
  }

  return String.fromCharCode(r)
}

a = "abcd"
b = "abcde"
findTheDifference(a, b)