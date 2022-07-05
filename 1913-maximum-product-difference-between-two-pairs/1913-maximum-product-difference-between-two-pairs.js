/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    let descending = [...nums].sort((a,b) => b - a);
    let ascending = [...nums].sort((a,b) => a - b);
    
    return descending[0] * descending[1] - ascending[0] * ascending[1]
    };

