/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


var twoSum = function(nums, target) {
  const map = {}
  for (let i = 0, len = nums.length; i < len; i++) {
    const diff = target - nums[i]
    if (map[nums[i]] !== undefined) {
      return [map[nums[i]], i]
    }
    map[diff] = i
  }
};

twoSum2([1,5,8,11,13], 16)

