/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums) {
    let count = 0
    
    for(i = 1; i < nums.length; i++){
        if(nums[i] <= nums[i-1]){
            count++;
            if(i > 1 && nums[i] <= nums[i-2]) 
                nums[i] = nums[i-1]
        }
    }
    return count <= 1 ? true : false
};