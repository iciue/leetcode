/*
 * @lc app=leetcode id=551 lang=javascript
 *
 * [551] Student Attendance Record I
 *
 * https://leetcode.com/problems/student-attendance-record-i/description/
 *
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let absentTimes = 0
  for (let i = 0, len = s.length; i < len; i++) {
    if (s[i] === 'A') absentTimes++
    if (absentTimes > 1) return false
    if (s[i] === 'L' && s[i - 1] === "L" && s[i + 1] === "L") return false
  }
  return true
};

console.log(
  checkRecord("LLPPPLL") // true
);