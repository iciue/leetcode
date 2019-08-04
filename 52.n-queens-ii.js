/*
 * @lc app=leetcode id=52 lang=javascript
 *
 * [52] N-Queens II
 *
 * https://leetcode.com/problems/n-queens-ii/description/
 *
 * algorithms
 * Hard (52.89%)
 * Likes:    302
 * Dislikes: 122
 * Total Accepted:    104.6K
 * Total Submissions: 197.6K
 * Testcase Example:  '4'
 *
 * The n-queens puzzle is the problem of placing n queens on an n×n chessboard
 * such that no two queens attack each other.
 * 
 * 
 * 
 * Given an integer n, return the number of distinct solutions to the n-queens
 * puzzle.
 * 
 * Example:
 * 
 * 
 * Input: 4
 * Output: 2
 * Explanation: There are two distinct solutions to the 4-queens puzzle as
 * shown below.
 * [
 * [".Q..",  // Solution 1
 * "...Q",
 * "Q...",
 * "..Q."],
 * 
 * ["..Q.",  // Solution 2
 * "Q...",
 * "...Q",
 * ".Q.."]
 * ]
 * 
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  return placeNQueens(n)
};

function placeNQueens(n, count = 0, board = [], row = 0) {
  if (row === n) return ++count

  for (let i = 0; i < n; i++) {  // 下标代表棋盘的行数, 值代表棋盘的列数
    if (isValidPlace(board, row, i)) {
      board.push(i)
      count = placeNQueens(n, count, board, row + 1)
      board.pop() // 回溯
    }
  }

  return count
}

function isValidPlace(board, row, col) {
  for (let i = 0; i < row; i++) {
    const queensPos = board[i] // 已就位的皇后的所处列数, i 为其行数
    if (queensPos === col) return false 
    if (queensPos + (row - i) === col) return false
    if (queensPos - (row - i) === col) return false
  }
  return true
}



console.log(
  totalNQueens(4)
);