/*
 * @lc app=leetcode id=698 lang=javascript
 *
 * [698] Partition to K Equal Sum Subsets
 *
 * https://leetcode.com/problems/partition-to-k-equal-sum-subsets/description/
 *
 * algorithms
 * Medium (42.55%)
 * Likes:    865
 * Dislikes: 53
 * Total Accepted:    45.4K
 * Total Submissions: 106.3K
 * Testcase Example:  '[4,3,2,3,5,2,1]\n4'
 *
 * Given an array of integers nums and a positive integer k, find whether it's
 * possible to divide this array into k non-empty subsets whose sums are all
 * equal.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [4, 3, 2, 3, 5, 2, 1], k = 4
 * Output: True
 * Explanation: It's possible to divide it into 4 subsets (5), (1, 4), (2,3),
 * (2,3) with equal sums.
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * 1 <= k <= len(nums) <= 16.
 * 0 < nums[i] < 10000.
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k, visited = [], subsetSum = 5) {
  if (k === 1) {
    // let subsetSum = nums.reduce((memo, item) => memo + item) / k
    // if (~~subsetSum - subsetSum !== 0) return false
    let currSum = 0
    for (let i = 0, len = nums.length; i < len; i++) {
      if (visited[i]) continue
      if (currSum + nums[i] === subsetSum) {
        currSum += nums[i]
        visited[i] = 1
      }
      if (currSum + nums[i] < subsetSum) {
        currSum += nums[i]
        visited[i] = 1
      }
    }
    if (currSum !== subsetSum) return false
    return true
  } else {
    return canPartitionKSubsets(nums, --k, visited)
  }
};

console.log(
  canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4)
);