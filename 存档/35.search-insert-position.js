/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 *
 * https://leetcode.com/problems/search-insert-position/description/
 *
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */


// 二分
var searchInsert = function (nums, target) {
  if(nums[0] > target) return 0
  if(nums[nums.length - 1] < target) return nums.length
  let s = 0
  let e = nums.length - 1

  while (e >= s) {
    let mid = ~~((s + e) / 2)
    if (target === nums[mid]) return mid
    if (target > nums[mid]) s = mid + 1
    if (target < nums[mid]) e = mid - 1
  }
  console.log(s,e);
  return s > e ? s : e
}

var searchInsert1 = function (nums, target) {

  for (let i = 0, len = nums.length; i < len; i++) {
    if (target - nums[i] === 0) {
      return i
    }
    if (target < nums[i]) {
      return i >= 0 ? i : 0
    }
    if (i === len - 1) return i + 1
  }

};
console.log(
  searchInsert([1, 3, 5, 6], 4)
);
//511