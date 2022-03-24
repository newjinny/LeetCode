/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let set = Array.from(new Set(nums));
    // console.log(set.length)
    return set.length < 3? set.sort((a,b) => b-a)[0]:set.sort((a,b) => b-a)[2]
};