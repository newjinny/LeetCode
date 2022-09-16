/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    let nums = BigInt(num.join(''))
    
    return String(nums + BigInt(k)).split('')
   
};
