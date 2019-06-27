/*
 * @lc app=leetcode id=989 lang=javascript
 *
 * [989] Add to Array-Form of Integer
 *
 * https://leetcode.com/problems/add-to-array-form-of-integer/description/
 *
 * algorithms
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
  let r = []
  let carry = K

  while (A.length || carry) {
    let d = (A.pop() || 0) + (carry % 10)
    r.push(d % 10)
    carry = ~~(carry / 10) + (~~(d / 10))
  }
  if (carry === 1) r.push(1)
  return r.reverse()
};

console.log(
  addToArrayForm([9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 34)
  // addToArrayForm([], 34)
);