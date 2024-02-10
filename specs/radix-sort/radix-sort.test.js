/*

  Implement a radix sort in a function called radixSort.

  You'll probably need several functions
  
  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.

*/

function radixSort(array) {
  // get max number of digits.
  const lengthOfLongestNumber = getLengthOfLongestNumber(array);

  // loop that many number of times, counting down to 0.

  // create an arrays of arrays to represent buckets for each digit 0-9.
  // new Array(10) creates an empty array of length 10, but there aren't actually ten items, so the array needs to be filled.
  // .fill() will fill those empty slots with specified values. Since nothing is passed, 'undefined' will be used.
  // .map(() => []) iterates through each item in the array, and returns [] to replace the 'undefined' in each index of the array.
  const buckets = new Array(10).fill().map(() => []);

  for (let i = lengthOfLongestNumber - 1; i >= 0; i--) {
    // loop through the input array,
    // loop until the input array is empty.
    while (array.length) {
      // get the value of the number at the current significant digit.
    }
    // push the number into its associated bucket until the input array is empty.
    // then push the numbers from the buckets into the empty input array in the order they are in the buckets.
  }
}

function getLengthOfLongestNumber(nums) {
  let length = 0;
  for (let i = 0; i < nums.length; i++) {
    const lengthOfCurrentNumber = nums[i].toString().length;
    if (lengthOfCurrentNumber > length) {
      length = lengthOfCurrentNumber;
    }
  }
  return length;
}

function getDigitValue(num, currentDigit) {
  // convert digit to string.
  // access digit at index of current digit - 1.
  return num.toString()[currentDigit - 1] || 0;
}

// unit tests
// do not modify the below code
describe("radix sort", function () {
  it("should sort correctly", () => {
    const nums = [
      20, 51, 3, 801, 415, 62, 4, 17, 19, 11, 1, 100, 1244, 104, 944, 854, 34,
      3000, 3001, 1200, 633,
    ];
    const ans = radixSort(nums);
    expect(ans).toEqual([
      1, 3, 4, 11, 17, 19, 20, 34, 51, 62, 100, 104, 415, 633, 801, 854, 944,
      1200, 1244, 3000, 3001,
    ]);
  });
  it("should sort 99 random numbers correctly", () => {
    const fill = 99;
    const nums = new Array(fill)
      .fill()
      .map(() => Math.floor(Math.random() * 500000));
    const ans = radixSort(nums);
    expect(ans).toEqual(nums.sort());
  });
});
