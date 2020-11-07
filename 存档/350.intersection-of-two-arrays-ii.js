/*
 * @lc app=leetcode id=350 lang=javascript
 *
 * [350] Intersection of Two Arrays II
 *
 * https://leetcode.com/problems/intersection-of-two-arrays-ii/description/
 *
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let intersections = []
  let res = []
  for (let i = 0, len = nums1.length; i < len; i++) {
    intersections[nums1[i]] === undefined ? intersections[nums1[i]] = 1 : intersections[nums1[i]] += 1
  }
  for (let i = 0, len = nums2.length; i < len; i++) {
    if (intersections[nums2[i]] > 0) {
      res.push(nums2[i])
      intersections[nums2[i]]--
    }
  }
  return res
};

console.log(
  intersect([1, 2, 2, 1], [2, 2])
);