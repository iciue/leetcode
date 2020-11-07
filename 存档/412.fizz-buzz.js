// https://leetcode.com/problems/fizz-buzz/
/**
 * 
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let res = []
  for (let i = 1; i <= n; i++) {
    switch (true) {
      case (i % 3 === 0) && (i % 5 === 0):
        res.push('FizzBuzz')
        break;
      case i % 3 === 0:
        res.push("Fizz")
        break;
      case i % 5 === 0:
        res.push('Buzz')
        break;
      default:
        res.push(i + '')
    }
  }
  return res
}
console.log(
  fizzBuzz(1)
);
