/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
   while (nums.length !== 1) {
       let sum =[]
    for(let i = 0 ; i <nums.length-1; i++ ){
        sum.push(nums[i]=(nums[i]+nums[i+1])%10)
        
    }
    nums = sum;
   }
    return nums[0]
};
