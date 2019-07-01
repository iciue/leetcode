/**
 * @param {number[]} candies
 * @return {number}
 */

// 本质上是数组去重
var distributeCandies = function (candies) {
  let kinds = 0
  let candiesLen = candies.length
  candies = candies.sort()
  for (let i = 0; i < candiesLen; i++) {
    let curr = candies[i]
    let next = candies[i + 1]
    if (curr !== next) kinds++
  }

  return kinds > candiesLen / 2 ? candiesLen / 2 : kinds
};


console.log(distributeCandies([1, 1, 2, 2, 3, 3, 5, 6]));