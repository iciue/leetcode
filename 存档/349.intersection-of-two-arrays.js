/*
 * @lc app=leetcode id=349 lang=javascript
 *
 * [349] Intersection of Two Arrays
 *
 * https://leetcode.com/problems/intersection-of-two-arrays/description/
 *
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let intersections = []
  let res = []

  for (let i = 0, len = nums1.length; i < len; i++) {
    intersections[nums1[i]] = 1
  }

  for (let i = 0, len = nums2.length; i < len; i++) {
    if (intersections[nums2[i]] === 1) {
      res.push(nums2[i])
      intersections[nums2[i]] = 0
    }
  }
  return res
};

console.log(
  intersection([4, 9, 5], [9, 4, 9, 8, 4])
);