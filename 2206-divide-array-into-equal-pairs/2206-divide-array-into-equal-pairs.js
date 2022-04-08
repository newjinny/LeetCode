/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    let arr = nums.sort((a,b) => b-a)
    for (i = 0; i<arr.length; i+=2){
        if(arr[i] !== arr[i+1]) 
            return false
    }
   return true
};

