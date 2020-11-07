/*
 * @lc app=leetcode id=51 lang=javascript
 *
 * [51] N-Queens
 *
 * https://leetcode.com/problems/n-queens/description/
 *
 * algorithms
 * Hard (40.38%)
 * Likes:    1041
 * Dislikes: 47
 * Total Accepted:    150.5K
 * Total Submissions: 372.1K
 * Testcase Example:  '4'
 *
 * The n-queens puzzle is the problem of placing n queens on an n×n chessboard
 * such that no two queens attack each other.
 * 
 * 
 * 
 * Given an integer n, return all distinct solutions to the n-queens puzzle.
 * 
 * Each solution contains a distinct board configuration of the n-queens'
 * placement, where 'Q' and '.' both indicate a queen and an empty space
 * respectively.
 * 
 * Example:
 * 
 * 
 * Input: 4
 * Output: [
 * ⁠[".Q..",  // Solution 1
 * ⁠ "...Q",
 * ⁠ "Q...",
 * ⁠ "..Q."],
 * 
 * ⁠["..Q.",  // Solution 2
 * ⁠ "Q...",
 * ⁠ "...Q",
 * ⁠ ".Q.."]
 * ]
 * Explanation: There exist two distinct solutions to the 4-queens puzzle as
 * shown above.
 * 
 * 
 */
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let ret = []
  placeNQueens(ret, n)
  return ret
}

function placeNQueens(ret, n, board = [], row = 0) {
  if (row === n) {
    ret.push(buildRet(board, n))
    return
  }
  for (let i = 0; i < n; i++) {
    if (isValidPlace(board, row, i)) {
      board.push(i)
      placeNQueens(ret, n, board, row + 1)
      board.pop()
    }
  }
}

function isValidPlace(board, row, col) {
  for (let i = 0; i < row; i++) {
    const queenPos = board[i]
    const distance = row - i
    if (queenPos === col) return false
    if (queenPos + distance === col) return false
    if (queenPos - distance === col) return false
  }
  return true
}

function buildRet(board, n) {
  return board.map(it => {
    let st = ""
    for (let i = 0; i < n; i++) {
      st += i === it ? 'Q' : '.'
    }
    return st
  });
}
console.log(
  solveNQueens(4)
);