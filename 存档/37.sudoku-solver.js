/*
 * @lc app=leetcode id=37 lang=javascript
 *
 * [37] Sudoku Solver
 *
 * https://leetcode.com/problems/sudoku-solver/description/
 *
 * algorithms
 * Hard (37.93%)
 * Likes:    973
 * Dislikes: 64
 * Total Accepted:    137.9K
 * Total Submissions: 362.9K
 * Testcase Example:  '[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]'
 *
 * Write a program to solve a Sudoku puzzle by filling the empty cells.
 * 
 * A sudoku solution must satisfy all of the following rules:
 * 
 * 
 * Each of the digits 1-9 must occur exactly once in each row.
 * Each of the digits 1-9 must occur exactly once in each column.
 * Each of the the digits 1-9 must occur exactly once in each of the 9 3x3
 * sub-boxes of the grid.
 * 
 * 
 * Empty cells are indicated by the character '.'.
 * 
 * 
 * A sudoku puzzle...
 * 
 * 
 * ...and its solution numbers marked in red.
 * 
 * Note:
 * 
 * 
 * The given board contain only digits 1-9 and the character '.'.
 * You may assume that the given Sudoku puzzle will have a single unique
 * solution.
 * The given board size is always 9x9.
 * 
 * 
 */
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

// 优化一下写法, 在递归中遍历数组表格, 不用嵌套循环
function solveSudoku(board, size = board.length, StartRow = 0, StartCol = 0) {
  if (StartCol >= size) {
    StartCol = 0
    StartRow += 1
  }
  if (StartRow >= size) return true

  if (board[StartRow][StartCol] === ".") {
    for (let d = 1; d <= 9; d++) {
      if (isValid(board, StartRow, StartCol, d + "")) {
        board[StartRow][StartCol] = d + ""
        if (solveSudoku(board, size, StartRow, StartCol + 1)) return true
        board[StartRow][StartCol] = "."
      }
    }
    return false
  }

  return solveSudoku(board, size, StartRow, StartCol + 1)
}

function solveSudoku(board, size = board.length, StartRow = 0, StartCol = 0) {
  if (StartCol === size - 1) {
    StartRow += 1
  }

  for (let row = StartRow; row < size; row++) {
    for (let col = 0; col < size; col++) {

      if (board[row][col] === ".") {
        for (let d = 1; d <= 9; d++) {
          if (isValid(board, row, col, d + "")) {
            board[row][col] = d + ""
            if (solveSudoku(board, size, row, col) === false) board[row][col] = "."
          }
        }
        if (board[row][col] === ".") return false
      }

    }
  }

  return board
}

function isValid(board, row, col, d) {
  if (board[row].includes(d)) return false

  for (let i = 0; i < board[row].length; i++) {
    if (board[i][col] === (d)) return false
  }

  let t1 = row < 3 ? 0 : (row < 6 ? 3 : 6)
  let t2 = col < 3 ? 0 : (col < 6 ? 3 : 6)

  for (let x = t1; x < t1 + 3; x++) {
    for (let y = t2; y < t2 + 3; y++) {
      if (board[x][y] === d) return false
    }
  }

  return true
}

const t = [
  ["5", "3", ".", ".", "7", "."],
  ["6", ".", ".", "1", "9", "5"],
  [".", "9", "8", ".", ".", "."],
  ["8", ".", ".", ".", "6", "."],
  ["4", ".", ".", "8", ".", "3"],
  ["7", ".", ".", ".", "2", "."],
]

solveSudoku(tmp)


function log(arr) {
  let st = ""
  for (let i = 0, len = arr.length; i < len; i++) {
    st = st + arr[i].join(" ") + "\n"
  }
  console.log(st)
}