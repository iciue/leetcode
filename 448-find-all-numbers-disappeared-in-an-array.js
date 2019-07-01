/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let max_num = nums.length
  let flags = []
  let res = []

  for (let i = 0; i < nums.length; i++) {
    flags[nums[i]] = 1
  }
  for (let i = 1; i <= max_num; i++) {
    if (flags[i] === undefined) {
      res.push(i)
    }
  }
  return res
};



console.log(
  // findDisappearedNumbers([4,3,2,7,8,2,3,1])
  findDisappearedNumbers([1, 1])
);