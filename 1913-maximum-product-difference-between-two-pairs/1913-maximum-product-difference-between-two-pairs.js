/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    let descendingNum = [...nums].sort((a,b) => b - a);
    let ascendingNum = [...nums].sort((a,b) => a - b);
    
    return descendingNum[0] * descendingNum[1] - ascendingNum[0] * ascendingNum[1]
    };

