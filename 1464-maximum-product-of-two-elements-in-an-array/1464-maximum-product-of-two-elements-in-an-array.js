/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
   let num = nums.sort((a,b)=>b-a);
    return (num[0]-1) * (num[1]-1);

};