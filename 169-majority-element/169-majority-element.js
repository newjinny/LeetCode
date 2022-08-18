/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let hash ={}
    let size = nums.length/2
    nums.map((char) => {
        hash[char] = hash[char] ? hash[char] + 1 : 1
    })
 
      for(let key in hash){
          if(hash[key]>size){
             return key
          }
      } 
  
};