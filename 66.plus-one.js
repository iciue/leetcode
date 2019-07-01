/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function (digits) {
  let arr = []
  let carry = 1

  do {
    let n = digits.pop() + carry
    arr.push(n % 10)
    carry = ~~(n / 10)
  } while (!!digits.length) {
    if (carry === 1) arr.push(1)
  }

  return arr.reverse()
}


console.log(
  plusOne([9, 9, 9])
);