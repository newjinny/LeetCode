/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
      let result = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (
        i < j &&
        j < nums.length &&
        nums[i] === nums[j] &&
        (i * j) % k === 0
      ) {
        result++;
      }
    }
  }

  return result;
};