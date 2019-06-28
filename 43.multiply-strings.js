/*
 * @lc app=leetcode id=43 lang=javascript
 *
 * [43] Multiply Strings
 *
 * https://leetcode.com/problems/multiply-strings/description/
 *
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if ((num1.length === 1 && num1[0] == 0) || (num2.length === 1 && num2[0] == 0)) return "0"
  let arr1 = num1.split('')
  let arr2 = num2.split('')
  let zeroCount = 0
  let res = []

  while (arr2.length) {
    let d = arr2.pop()
    let product = getProduct(arr1, d, zeroCount)
    res = getProduceSum(res, product)
    zeroCount++
  }

  function getProduceSum(arr1, arr2) {
    if (arr1.length === 0) return arr2
    let r = []
    let carry = 0
    while (arr1.length || arr2.length) {
      let n1 = arr1.pop() || 0
      let n2 = arr2.pop() || 0
      let s = n1 + n2 + carry
      r.push(s % 10)
      carry = ~~(s / 10)
    }
    if (carry !== 0) r.push(1)
    return r.reverse()
  }

  function getProduct(num, n, zeroCount) {
    let r = []
    let c = 0
    for (let len = num.length, i = len - 1; i >= 0; i--) {
      let d = num[i] * n // 18
      let tmp = d + c
      r.push(tmp % 10)
      c = ~~((d + c) / 10)
    }
    if (c !== 0) r.push(c)
    r = r.reverse()
    for (let i = 0; i < zeroCount; i++) {
      r.push(0)
    }
    return r
  }

  return res.join('')
};

console.log(
  // multiply("123456789", "987654321")
  // multiply("672", "8")
  multiply("2925", "4787")
)