/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 *
 * Given a string, find the length of the longest substring without repeating
 * characters.
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) return 0
  let map = {}
  let pos = 0
  let i = 0
  let count = 0
  for (let len = s.length; i < len; i++) {
    let letter = s[i]
    if (map[letter]) {
      map[letter]++
      while (map[letter] === 2) {
        map[s[pos]]--
        pos++
      }
    } else {
      map[letter] = 1
    }
    count = i - pos > count ? i - pos : count
  }
  return count + 1
};
console.log(
  lengthOfLongestSubstring("abbcacbb"),
  lengthOfLongestSubstring("pwwkew"),
  lengthOfLongestSubstring("bbbbbbb"),
  lengthOfLongestSubstring("dvedf"),
  lengthOfLongestSubstring("abcdef"),
);