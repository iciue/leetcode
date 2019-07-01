function binarySearch(arr, target) {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    let mid = ~~((left + right) / 2)
    if (arr[mid] === target) return mid
    if (arr[mid] > target) right = mid - 1
    if (arr[mid] < target) left = mid + 1
  }
  return -1
}

console.log(
  binarySearch([1, 3, 5], 1),
  binarySearch([1, 3], 3),
  binarySearch([1, 3, 5], 5)
);

// 右值点不需取到, 则 right 可以直接等于 mid. 否则必须 mid-1, 否则 i == j 时会出现死循环
// 