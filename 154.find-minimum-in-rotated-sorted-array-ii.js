/*
 * @lc app=leetcode id=154 lang=javascript
 * [154] Find Minimum in Rotated Sorted Array II
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/description/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if (nums[0] <= nums[nums.length - 1] && nums[0] !== nums[nums.length - 1]) return nums[0]
  if (nums.length === 1) return nums[0]
  let s = 0
  let e = nums.length - 1

  while (e - s !== 1) {
    let mid = ~~((s + e) / 2)
    // 如果和尾部一样则此时处于重复的降序区间
    if (nums[mid] === nums[e]) {
      s = mid
      continue
    }
    if (nums[mid] === nums[s]) {
      s = mid
      continue
    }
    if (nums[mid] > nums[s]) s = mid
    if (nums[mid] < nums[s]) e = mid
  }
  console.log(nums[e]);
  return nums[e]
};
findMin([3, 1, 3, 3, 3, 3])
findMin([2, 2, 2, 0, 1])