/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 *
 * https://leetcode.com/problems/valid-sudoku/description/
 * [
 * ["8","3",".",".","7",".",".",".","."],
 * ["6",".",".","1","9","5",".",".","."],
 * [".","9","8",".",".",".",".","6","."],
 * ["8",".",".",".","6",".",".",".","3"],
 * ["4",".",".","8",".","3",".",".","1"],
 * ["7",".",".",".","2",".",".",".","6"],
 * [".","6",".",".",".",".","2","8","."],
 * [".",".",".","4","1","9",".",".","5"],
 * [".",".",".",".","8",".",".","7","9"]
 * ]
 */
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let columns = []
  // 每行合法
  for (let i = 0, len = board.length; i < len; i++) {
    let row = board[i]
    if (!isValid(row)) return false
    for (let j = 0, len2 = row.length; j < len2; j++) {
      if (columns[j] === undefined) columns[j] = []
      columns[j].push(row[j])
    }
  }
  // 每列合法
  for (let i = 0; i < 9; i++) {
    if (!isValid(columns[i])) return false
  }

  for (let i = 0; i < 9; i += 3) {
    for (j = 0; j < 9; j += 3) {
      let box = []
      for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
          box.push(board[x + i][y + j])
        }
      }
      console.log(box);
      if (!isValid(box)) return false
    }
  }
  return true
  function isValid(ary) {
    for (let i = 0, len = ary.length; i < len; i++) {
      if (ary[i] === '.') continue
      if (ary.indexOf(ary[i], i + 1) !== -1) return false
    }
    return true
  }
};

console.log(
  isValidSudoku(
    [
      ["5", "3", ".", ".", "7", ".", ".", ".", "."],
      ["6", ".", ".", "1", "9", "5", ".", ".", "."],
      [".", "9", "8", ".", ".", ".", ".", "6", "."],
      ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
      ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
      ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
      [".", "6", ".", ".", ".", ".", "2", "8", "."],
      [".", ".", ".", "4", "1", "9", ".", ".", "5"],
      [".", ".", ".", ".", "8", ".", ".", "7", "9"]
    ])
);