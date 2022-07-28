/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let arr = []
    nums1.map((num1,i)=>{ 
        if(nums2.includes(num1)){
                arr.push(num1)
                nums2.splice(nums2.indexOf(num1),1)
        }

 })
        
    return arr
};
