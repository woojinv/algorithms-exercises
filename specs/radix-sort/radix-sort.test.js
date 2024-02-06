/*

  Implement a radix sort in a function called radixSort.

  You'll probably need several functions
  
  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.

*/

function radixSort(array) {
  // get number of iterations for loop from input array.
  const maxNumDigits = Math.max(...array).toString().length;

  // create loop based on retrieved number of iterations
  for (let i = 0; i < maxNumDigits; i++) {
    const buckets = [[], [], [], [], [], [], [], [], [], []];
    for (let j = 0; j < array.length; j++) {
      // from each item, get value of current significant digit.
      const currentSigDigit = getCurrentSignificantDigitValue(array[j], i);
      // place item in corresponding bucket.
      buckets[currentSigDigit].push(array[j]);
    }

    // clear array before pushing items into it.
    array = [];
    // dequeue items from buckets
    for (let k = 0; k < buckets.length; k++) {
      array.push(...buckets[k]);
    }
  }

  // pass through array again.
  return array;
}

function getCurrentSignificantDigitValue(num, significantDigit) {
  const { length } = num.toString();
  const value = Number(num.toString()[length - 1 - significantDigit]);

  return Number.isNaN(value) ? 0 : value;
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
    expect(ans).toEqual(nums.sort());
  });
});
