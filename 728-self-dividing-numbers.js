/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  let arr = []

  for (let j = left; j <= right; j++) {
    let i = j
    while (i > 0) {
      let d = i % 10
      if (j % d !== 0) break
      i = Math.floor(i / 10)
      if (i === 0) arr.push(j)
    }
  }
  return arr
};


console.log(selfDividingNumbers(20, 22));