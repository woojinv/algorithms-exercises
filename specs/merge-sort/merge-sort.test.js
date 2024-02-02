/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

/*
Merge sort involves first, recursively splitting the original array into smaller and smaller pieces until you get arrays of length 1. 
Then you piece those arrays back together, putting them in order as you join larger and larger arrays together. 
*/
const mergeSort = (nums) => {
  if (nums.length < 2) return nums;
  return compareSort(mergeSort(nums.slice(0, Math.floor(nums.length / 2))), mergeSort(nums.slice(nums.length / 2)));
};

// Takes in two arrays.
function compareSort(left, right) {
  const result = [];
  while (left.length && right.length) left[0] < right[0] ? result.push(left.shift()) : result.push(right.shift());
  return result.concat(left, right);
}

// unit tests
// do not modify the below code
test('merge sort', function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
