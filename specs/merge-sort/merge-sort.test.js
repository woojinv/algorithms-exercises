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
  // Base case: return the entire array if there is only 1 item in it, since it is already "sorted".
  if (nums.length === 1) return nums;

  // Get the left half of the array.
  // .splice() modifies the original array, so what's remaining is the right half. 
  const leftArr = nums.splice(0, nums.length / 2);
 
  // Recursively call mergeSort() on each half of the array until an array of length 1 is returned.
  // Then continue to bring the arrays together, each array becoming increasingly larger, until returning to the original length.
  // The last compareSort() call will return the fully sorted array.
  return compareSort(mergeSort(leftArr), mergeSort(nums));
};

// Takes in two arrays.
function compareSort(leftArr, rightArr) {
  const sortedArr = [];

  let leftIndex = 0;
  let rightIndex = 0;

  // Keep looping until you have reached the end of one of the arrays.
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    const left = leftArr[leftIndex];
    const right = rightArr[rightIndex];

    // Push numbers into sortedArr in ascending order.
    // increment where in each array you are if you've added a value from that array.
    if (left < right) {
      sortedArr.push(left);
      leftIndex++;
    } else {
      sortedArr.push(right);
      rightIndex++;
    }
  }

  // Append the remaining values in each array to sortedArr.
  // The array that is "empty" will not add any values to sortedArr.
  return sortedArr.concat(rightArr.slice(rightIndex)).concat(leftArr.slice(leftIndex));
}

// unit tests
// do not modify the below code
test('merge sort', function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
