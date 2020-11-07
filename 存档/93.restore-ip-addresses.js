/*
 * @lc app=leetcode id=93 lang=javascript
 *
 * [93] Restore IP Addresses
 *
 * https://leetcode.com/problems/restore-ip-addresses/description/
 *
 * algorithms
 * Medium (32.00%)
 * Likes:    721
 * Dislikes: 298
 * Total Accepted:    147K
 * Total Submissions: 458.7K
 * Testcase Example:  '"25525511135"'
 *
 * Given a string containing only digits, restore it by returning all possible
 * valid IP address combinations.
 * 
 * Example:
 * 
 * 
 * Input: "25525511135"
 * Output: ["255.255.11.135", "255.255.111.35"]
 * 
 * 
 */
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const ret = []
  helper(s, ret)
  console.log(ret)
  return ret
};

function helper(s, ret, ip = [], size = 9) {
  if (s.length === 0) {
    const tmp = ip.join('.')
    if (!ret.includes(tmp)) ret.push(tmp)
    return
  }

  for (let i = 1; i <= 3; i++) {
    const st = s.slice(0, i)
    if (isValid(s, st, size)) {
      ip.push(st)
      helper(s.slice(i), ret, ip, size - 3)
      ip.pop()
    }
  }
}

function isValid(s, st, size) {
  const rest = s.length - st.length
  if (rest > size || rest < size / 3) return false
  if (st > 255) return false
  if (st.length > 1 && st[0] === "0")  return false
  return true
}

// restoreIpAddresses("25525511135")
// restoreIpAddresses("0000")
restoreIpAddresses("010010")
