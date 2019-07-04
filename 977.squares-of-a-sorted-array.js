/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 *
 * https://leetcode.com/problems/squares-of-a-sorted-array/description/
 *
 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  let squares = []
  for (let i = 0, len = A.length; i < len; i++) {
    squares.push(Math.pow(A[i], 2))
  }

  for (let i = 0, len = squares.length; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      if (squares[j] > squares[j + 1]) {
        let tmp = squares[j]
        squares[j] = squares[j + 1]
        squares[j + 1] = tmp
      }
    }
  }
  return squares
};

console.log(
  sortedSquares([-4,-1,0,3,10])
);