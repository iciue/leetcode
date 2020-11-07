/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 *
 * https://leetcode.com/problems/coin-change/description/
 *
 * algorithms
 * Medium (31.18%)
 * Likes:    2010
 * Dislikes: 78
 * Total Accepted:    220.5K
 * Total Submissions: 705.8K
 * Testcase Example:  '[1,2,5]\n11'
 *
 * You are given coins of different denominations and a total amount of money
 * amount. Write a function to compute the fewest number of coins that you need
 * to make up that amount. If that amount of money cannot be made up by any
 * combination of the coins, return -1.
 * 
 * Example 1:
 * 
 * 
 * Input: coins = [1, 2, 5], amount = 11
 * Output: 3 
 * Explanation: 11 = 5 + 5 + 1
 * 
 * Example 2:
 * 
 * 
 * Input: coins = [2], amount = 3
 * Output: -1
 * 
 * 
 * Note:
 * You may assume that you have an infinite number of each kind of coin.
 * 
 */
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// DP
var coinChange = function (coins, amount) {
  const dp = Array(amount + 1).fill(Infinity)
  dp[0] = 0

  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      let min = Infinity
      if (i >= coins[j]) {
        min = Math.min(dp[i - coins[j]] + 1, dp[i])
      }
      if (min < dp[i]) dp[i] = min
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount]
}


// 递归 + 缓存
var coinChange1 = function (coins, amount, memo = {}) {
  if (amount === 0) return 0
  if (memo[amount] !== undefined) return memo[amount]

  let idx = coins.indexOf(amount)
  if (idx !== -1) return 1

  if (amount < Math.min(...coins)) return -1

  let fewestSolve = Infinity
  for (let i = 0, len = coins.length; i < len; i++) {
    if (amount < coins[i]) continue
    const tmp = coinChange(coins, amount - coins[i], memo)
    if (tmp !== -1) {
      fewestSolve = tmp + 1 < fewestSolve ? tmp + 1 : fewestSolve
    }
  }

  memo[amount] = fewestSolve === Infinity ? -1 : fewestSolve

  return memo[amount]
};

console.log(
  // coinChange([2], 3),
  coinChange([1, 2, 5], 6),
  // coinChange([186, 419, 83, 408], 6249),
);