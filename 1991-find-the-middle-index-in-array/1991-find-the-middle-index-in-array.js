/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    for(i = 0; i < nums.length; i++){
        let left = nums.slice(0,i).reduce((a,b) => a+b, 0)
        let right = nums.slice(i+1).reduce((a,b) => a+b, 0)
     
        if( left === right){
            return i
        }
        
    }
    return -1
};

