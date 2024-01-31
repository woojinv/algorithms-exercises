/*
  Insertion sort!
  
  Be sure to call your function insertionSort!
  
  The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
  The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner
  loop goes over the sorted part of the list and inserts it into the correct position in the array.
  
  Like bubble sort, there's a visualization mechanism available to you. Just call snapshot(myArray) at the beginning of
  your inner loop and it should handle the rest for you!
  
  And you put xdescribe instead of describe if you want to suspend running the unit tests.  
*/

function insertionSort(nums) {
  // Outer loop: Starting at second element in array,
  // it checks to see where in sorted portion element should be inserted. 
  for (let i = 1; i < nums.length; i++) {
    const current = nums[i];
    let sorted = i - 1;

    // Inner loop: Responsible for shifting elements to right to make room for "current". 
    // Iterates backwards through sorted portion of array.
    for (let j = i - 1; j >= 0; j--) {
      // Once "current" is greater than element being compared to,
      // we know the it's greater than remaining elements,
      // since those have already been sorted.
      // So we can stop comparing elements with current "current" element and go to next iteration.
      if (current >= nums[j]) break;

      // Shift elements to right, making room for "current" to be inserted.
      nums[j + 1] = nums[j];

      // Update where array has been sorted to.
      sorted = j;
    }

    // Once elements have been shifted, place "current" into appropriate index.
    nums[sorted] = current;
  }

  return nums;
}

// unit tests
// do not modify the below code
test('insertion sort', function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  insertionSort(nums);
  expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
