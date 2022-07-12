/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [[]];
    for (let i = 0; i < nums.length; i++)
        for (let j = result.length - 1; j > -1; j--)
            result.push([...result[j], nums[i]]);
    
    return result;

};