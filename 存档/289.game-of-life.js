/*
 * @lc app=leetcode id=289 lang=javascript
 *
 * [289] Game of Life
 *
 * https://leetcode.com/problems/game-of-life/description/
 *
 * algorithms
 * Medium (46.81%)
 * Likes:    1048
 * Dislikes: 197
 * Total Accepted:    125.2K
 * Total Submissions: 265.5K
 * Testcase Example:  '[[0,1,0],[0,0,1],[1,1,1],[0,0,0]]'
 *
 * According to the Wikipedia's article: "The Game of Life, also known simply
 * as Life, is a cellular automaton devised by the British mathematician John
 * Horton Conway in 1970."
 * 
 * Given a board with m by n cells, each cell has an initial state live (1) or
 * dead (0). Each cell interacts with its eight neighbors (horizontal,
 * vertical, diagonal) using the following four rules (taken from the above
 * Wikipedia article):
 * 
 * 
 * Any live cell with fewer than two live neighbors dies, as if caused by
 * under-population.
 * Any live cell with two or three live neighbors lives on to the next
 * generation.
 * Any live cell with more than three live neighbors dies, as if by
 * over-population..
 * Any dead cell with exactly three live neighbors becomes a live cell, as if
 * by reproduction.
 * 
 * 
 * Write a function to compute the next state (after one update) of the board
 * given its current state. The next state is created by applying the above
 * rules simultaneously to every cell in the current state, where births and
 * deaths occur simultaneously.
 * 
 * Example:
 * 
 * 
 * Input: 
 * [
 * [0,1,0],
 * [0,0,1],
 * [1,1,1],
 * [0,0,0]
 * ]
 * Output: 
 * [
 * [0,0,0],
 * [1,0,1],
 * [0,1,1],
 * [0,1,0]
 * ]
 * 
 * 
 * Follow up:
 * 
 * 
 * Could you solve it in-place? Remember that the board needs to be updated at
 * the same time: You cannot update some cells first and then use their updated
 * values to update other cells.
 * In this question, we represent the board using a 2D array. In principle, the
 * board is infinite, which would cause problems when the active area
 * encroaches the border of the array. How would you address these problems?
 * 
 * 
 */
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  const copy = board.map(arr => arr.slice())
  const height = board.length
  const width = board[0].length

  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      const count = helper(copy, row, col)
      if (copy[row][col] === 1) {
        board[row][col] = count === 2 || count === 3 ? 1 : 0
      } else {
        board[row][col] = count === 3 ? 1 : 0
      }
    }
  }
  return board
};

function helper(board, row, col) {
  const dirs = {
    left: [row, col - 1],
    leftUp: [row - 1, col - 1],
    leftDown: [row + 1, col - 1],
    up: [row - 1, col],
    down: [row + 1, col],
    right: [row, col + 1],
    rightUp: [row - 1, col + 1],
    rightDown: [row + 1, col + 1]
  }
  let count = 0
  const height = board.length
  const width = board[0].length

  for (const dir in dirs) {
    if (dirs.hasOwnProperty(dir)) {
      const [x, y] = dirs[dir]
      if (x >= 0 && y >= 0 && x < height && y < width) {
        if (board[x][y] === 1) count++
      }
    }
  }

  return count
}

// [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
gameOfLife([
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0]
])