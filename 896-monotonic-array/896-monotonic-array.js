/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let inums = [...nums].sort((a, b) => a - b).join('');
    let dnums = [...nums].sort((a, b) => b - a).join('');

    return (nums.join('') === inums || nums.join('') === dnums)
    
};

