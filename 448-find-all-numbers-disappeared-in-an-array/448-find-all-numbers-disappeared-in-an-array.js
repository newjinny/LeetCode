/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let result = []
    for(i = 1; i <= nums.length; i++){
        if(nums.indexOf(i) < 0){
            result.push(i)
        }
    }
    return result
    
    
};
