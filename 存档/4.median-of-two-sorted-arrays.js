/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 *
 * https://leetcode.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (26.92%)
 * Likes:    4761
 * Dislikes: 677
 * Total Accepted:    480.3K
 * Total Submissions: 1.8M
 * Testcase Example:  '[1,3]\n[2]'
 *
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * 
 * Find the median of the two sorted arrays. The overall run time complexity
 * should be O(log (m+n)).
 * 
 * You may assume nums1 and nums2 cannot be both empty.
 * 
 * Example 1:
 * 
 * 
 * nums1 = [1, 3]
 * nums2 = [2]
 * 
 * The median is 2.0
 * 
 * 
 * Example 2:
 * 
 * 
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * 
 * The median is (2 + 3)/2 = 2.5
 * 
 * 
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */


var findMedianSortedArrays = function (nums1, nums2) {
  const mediaIdx = (nums1.length + nums2.length - 1) / 2
  let i = j = 0
  const ret = []
  while (ret.length <= mediaIdx + 1) {
    if (nums2[j] === undefined || nums1[i] <= nums2[j]) {
      ret.push(nums1[i++])
    } else {
      ret.push(nums2[j++])
    }
  }

  return ~~mediaIdx - mediaIdx === 0 ? ret[mediaIdx] : (ret[ret.length - 1] + ret[ret.length - 2]) / 2
};