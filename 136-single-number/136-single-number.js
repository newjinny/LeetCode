/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
     const answer = nums.reduce((acc, num) => acc ^ num);
  return answer;
};