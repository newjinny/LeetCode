/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let set1 = [...new Set(nums1)].filter((x) => !nums2.includes(x))
    let set2 = [...new Set(nums2)].filter((x) => !nums1.includes(x))
    return [set1,set2]
    
};