/**
 * @param {number[]} nums
 * @return {number}
 * 
 * Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 */

var removeDuplicates = function (nums) {
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1)
      i -= 1
      len -= 1
    }
  }
  return nums
};


var removeDuplicates2 = function (nums) {
  let j = 0
  for (let i = 1, len = nums.length; i < len; i++) {
    if (nums[j] !== nums[i]) nums[j += 1] = nums[i]
  }
  return nums
}

let a = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
let r = removeDuplicates2(a)
console.log(r);