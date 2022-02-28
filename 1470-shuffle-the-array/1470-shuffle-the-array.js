/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
     x = nums.slice(0, n);
     y = nums.slice(n);
    
    let newArray = [];

    for (i = 0; i < n; i++) {
        newArray.push(x[i]);
        newArray.push(y[i]);
        
}
    return newArray
};