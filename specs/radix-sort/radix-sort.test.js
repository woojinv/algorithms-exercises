/*

  Implement a radix sort in a function called radixSort.

  You'll probably need several functions
  
  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.

*/

function radixSort(array) {
  const largestNumberLength = getLargestNumberLength(array);

  // create 10 buckets for digits numbers 0-9.
  const buckets = new Array(10).fill().map(() => []);

  // loop through array.
  // the number of digits in longest item is how many times to loop.
  for (let currentSigDigIndex = largestNumberLength - 1; currentSigDigIndex >= 0; currentSigDigIndex--) {
    while (array.length) {
      const current = array.shift();
      // track which significant digit you are currently sorting by.
      // retrieve the value of that sig digit for the current iteration.
      const valueAtSigDig = getValueAtSigDig(current, currentSigDigIndex, largestNumberLength);

      // put that entire item into the bucket for its corresponding sig digit value.
      buckets[valueAtSigDig].push(current);
    }

    // once all item from original array are in the buckets,
    // empty the items in the buckets into the original array,
    // maintaining their order in the buckets, from 0-9.
    for (let k = 0; k < buckets.length; k++) {
      while (buckets[k].length) {
        array.push(buckets[k].shift());
      }
    }
  }
  // once this process is repeated enough times, return the sorted array.

  return array;
}

function getLargestNumberLength(nums) {
  let largestNumber = 0;
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    if (currentNum > largestNumber) largestNumber = currentNum;
  }

  return largestNumber.toString().length;
}

function getValueAtSigDig(currentNumber, currentSigDigIndex, largestNumberLength) {
  const currentNumLength = currentNumber.toString().length;
  const modifier = largestNumberLength - currentNumLength;

  return currentNumber.toString()[currentSigDigIndex - modifier] || 0;
}

// unit tests
// do not modify the below code
describe('radix sort', function () {
  it('should sort correctly', () => {
    const nums = [20, 51, 3, 801, 415, 62, 4, 17, 19, 11, 1, 100, 1244, 104, 944, 854, 34, 3000, 3001, 1200, 633];
    const ans = radixSort(nums);
    expect(ans).toEqual([1, 3, 4, 11, 17, 19, 20, 34, 51, 62, 100, 104, 415, 633, 801, 854, 944, 1200, 1244, 3000, 3001]);
  });
  it('should sort 99 random numbers correctly', () => {
    const fill = 99;
    const nums = new Array(fill).fill().map(() => Math.floor(Math.random() * 500000));
    const ans = radixSort(nums);
    console.log(ans, '<<< ans');
    expect(ans).toEqual(nums.sort());
  });
});
