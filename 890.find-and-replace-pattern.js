/*
 * @lc app=leetcode id=890 lang=javascript
 *
 * [890] Find and Replace Pattern
 *
 * https://leetcode.com/problems/find-and-replace-pattern/description/
 *
 * algorithms
 * Medium (71.32%)
 * Likes:    389
 * Dislikes: 38
 * Total Accepted:    31.4K
 * Total Submissions: 44K
 * Testcase Example:  '["abc","deq","mee","aqq","dkd","ccc"]\n"abb"'
 *
 * You have a list of words and a pattern, and you want to know which words in
 * words matches the pattern.
 * 
 * A word matches the pattern if there exists a permutation of letters p so
 * that after replacing every letter x in the pattern with p(x), we get the
 * desired word.
 * 
 * (Recall that a permutation of letters is a bijection from letters to
 * letters: every letter maps to another letter, and no two letters map to the
 * same letter.)
 * 
 * Return a list of the words in words that match the given pattern. 
 * 
 * You may return the answer in any order.
 * 
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"
 * Output: ["mee","aqq"]
 * Explanation: "mee" matches the pattern because there is a permutation {a ->
 * m, b -> e, ...}. 
 * "ccc" does not match the pattern because {a -> c, b -> c, ...} is not a
 * permutation,
 * since a and b map to the same letter.
 * 
 * 
 * 
 * Note:
 * 
 * 
 * 1 <= words.length <= 50
 * 1 <= pattern.length = words[i].length <= 20
 * 
 * 
 * 
 */
/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
  let p = getPattern(pattern)
  let res = []
  for (let i = 0, len = words.length; i < len; i++) {
    if (p === getPattern(words[i])) res.push(words[i])
  }
  return res
};


function getPattern(word) {
  let map = {}
  let count = 1
  let res = ''
  for (let i = 0, len = word.length; i < len; i++) {
    if (map[word[i]]) {
      res += map[word[i]]
    } else {
      map[word[i]] = count++
      res += map[word[i]]
    }
  }

  return res
}