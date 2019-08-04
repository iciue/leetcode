/*
 * @lc app=leetcode id=1079 lang=javascript
 *
 * [1079] Letter Tile Possibilities
 *
 * https://leetcode.com/problems/letter-tile-possibilities/description/
 *
 * algorithms
 * Medium (75.99%)
 * Likes:    201
 * Dislikes: 8
 * Total Accepted:    8.8K
 * Total Submissions: 11.5K
 * Testcase Example:  '"AAB"'
 *
 * You have a set of tiles, where each tile has one letter tiles[i] printed on
 * it.  Return the number of possible non-empty sequences of letters you can
 * make.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: "AAB"
 * Output: 8
 * Explanation: The possible sequences are "A", "B", "AA", "AB", "BA", "AAB",
 * "ABA", "BAA".
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "AAABBC"
 * Output: 188
 * 
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * 1 <= tiles.length <= 7
 * tiles consists of uppercase English letters.
 * 
 */
/**
 * @param {string} tiles
 * @return {number}
 */

var numTilePossibilities = function(tiles) {
  const arr = setTiles(tiles) 
  return new Set(arr).size
};

function setTiles(tiles, arr = [], seq = "") {
  for (let i = 0, len = tiles.length; i < len; i++) {
    const nextSeq = seq + tiles[i]
    arr.push(nextSeq)
    const nextTiles = tiles.slice(0, i) + tiles.slice(i + 1)
    setTiles(nextTiles, arr, nextSeq)
  }
  return arr
}

numTilePossibilities('AAB')