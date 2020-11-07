/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

function myPow(x, n) {
  let t = x
  let r = 1
  let y = 1

  while (n > 0) {
    let d = n % 2
    if (d) {
      r *= tmp
    }
    t = t * t
    n = n >> 1
  }

  return r
}

function myPow(x, n) {
  if (n === 0) return 1;
  let a = [],
    result = x,
    pow = Math.abs(n)

  while (pow !== 1) {
    let key = pow % 2
    a.push(key)
    pow = Math.floor(pow / 2)
  }
  while (a.length != 0) {
    console.log(a);
    if (a[a.length - 1] === 0) {
      result = result * result
    } else {
      result = result * result * x
    }
    a.pop()
  }
  console.log(result);
  return n < 0 ? 1 / result : result
}

// 递归 1
function myPow(x, n) {
  let idx = Math.abs(n)
  let base = x
  let result = recur(x, idx)
  return n > 0 ? result : 1 / result
}

function recur(x, n) {
  if (n === 1) return x
  if (n === 0) return 1

  let temp = recur(x, Math.floor(n / 2))
  if (n % 2 === 0) {
    return temp * temp
  } else {
    return temp * temp * x
  }
}


// 递归 2 参考:https://leetcode.com/problems/powx-n/discuss/313640/Javascript-Recursion
var myPow = function (x, n) {
  if (n === 0) return 1
  let idx = Math.abs(n)

  let result = idx % 2 === 0 ? myPow(x * x, idx / 2) : myPow(x * x, (idx - 1) / 2) * x
  return n > 0 ? result : 1 / result
}


// 栈
var myPow = function (x, n) {
  if (n === 0) return 1;
  let a = [],
    result = x,
    pow = Math.abs(n)

  while (pow !== 1) {
    let key = pow % 2
    a.push(key)
    pow = Math.floor(pow / 2)
  }
  while (a.length != 0) {
    console.log(a);
    if (a[a.length - 1] === 0) {
      result = result * result
    } else {
      result = result * result * x
    }
    a.pop()
  }
  console.log(result);
  return n < 0 ? 1 / result : result
};




console.log(myPow2(2, 10)); // 1024

// console.log(myPow(8.84372, -5));
// console.log(Math.pow(8.84372, -5));