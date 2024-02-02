/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
  // 1. if the array has a length of 1, then just return that value.
  if (nums.length === 1) return nums;

  // split the array.
  const middleIndex = nums.length / 2;
  const leftArr = nums.splice(0, middleIndex);
  const rightArr = nums;

  return compareSort(mergeSort(leftArr), mergeSort(rightArr));
};

function compareSort(leftArr, rightArr) {
  const sortedArr = [];

  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      sortedArr.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      sortedArr.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }

  return sortedArr.concat(rightArr.slice(rightIndex)).concat(leftArr.slice(leftIndex));
}

// unit tests
// do not modify the below code
test('merge sort', function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
