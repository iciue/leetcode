/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


var twoSum = function (nums, target) {
  let len = nums.length;
  for (let i1 = 0; i1 < len; i1++) {
    let diff = target - nums[i1]
    let i2 = nums.indexOf(diff)
    if( i2 !== -1 && i2 !== i1) {
      return [i1, i2]
    }
  }
}

var twoSum2 = function(nums, target) {
  let len = nums.length
  let dict = {} 
  for (let i = 0; i < len; i++) {
    let diff = target - nums[i]
    console.log(dict);
    
    if( diff in dict) {
      return [dict[diff], i]
    }else {
      dict[diff] = i
    }
  }
}

twoSum2([1,5,8,11,13], 16)

