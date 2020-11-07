/*
 * @lc app=leetcode id=868 lang=javascript
 *
 * [868] Binary Gap
 */
/**
 * @param {number} N
 * @return {number}
 */

// 将二进制字符串分割为数组
var binaryGap = function (N) {
  
}

// 利用位运算遍历每一位二进制
var binaryGap = function (N) {
  let isOne = 0
  let currMax = 0
  let count = 0

  while (N !== 0) {
    if (isOne === 1) {
      count++
    }

    if (isOne === 1 && N & 1 === 1) {
      currMax = count >= currMax ? count : currMax
      count = 0
    }
    if (isOne === 0 && N & 1 === 1) {
      isOne = 1
    }

    N = N >> 1
  }
  console.log(currMax);
  return currMax
};

binaryGap(11861) // 10111001010101 >> 2