/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
      let len=nums.length
     if(target>nums[len-1]){
            return len;
        }
    else if(target<nums[0]){
        return 0;
    }
    for(i=0;i<len;i++){
        if(nums[i]===target){
            return i;
        }
        if(nums[i]<target && nums[i+1]>target){
            return i+1;
        }
    }
};