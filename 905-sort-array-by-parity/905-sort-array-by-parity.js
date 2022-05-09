/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    for(let i=0; i < nums.length; i++){
        if(nums[i]%2===0){
            let result = nums.splice(i,1);
            nums.unshift(result)
        }
    }
    return nums
};