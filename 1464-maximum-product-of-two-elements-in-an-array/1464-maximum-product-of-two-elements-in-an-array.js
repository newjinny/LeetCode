/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
   let maxNum = nums.sort((a,b)=>b-a);
    return (maxNum[0]-1) * (maxNum[1]-1);

};