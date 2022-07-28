/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let arr = []
    nums1.map((num,i)=>{ 
        if(nums2.includes(num)){
                arr.push(num)
                nums2.splice(nums2.indexOf(num),1)
        }

 })
        
    return arr
};
