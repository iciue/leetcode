/*
 * @lc app=leetcode id=205 lang=javascript
 *
 * [205] Isomorphic Strings
 *
 * https://leetcode.com/problems/isomorphic-strings/description/
 *
 * Given two strings s and t, determine if they are isomorphic.
 * 
 * Two strings are isomorphic if the characters in s can be replaced to get t.
 * 
 * All occurrences of a character must be replaced with another character while
 * preserving the order of characters. No two characters may map to the same
 * character but a character may map to itself.
 * 
 * Note:
 * You may assume both s and t have the same length.
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  return getIsomorphic(s) === getIsomorphic(t)

  function getIsomorphic(str) {
    let map = {}
    let res = ''
    for (let i = 0, len = str.length; i < len; i++) {
      if (map[str[i]]) {
        res += map[str[i]]
      } else {
        map[str[i]] = i + 1
        res += map[str[i]]
      }
    }
    return res
  }
};

isIsomorphic("abba", "abab")