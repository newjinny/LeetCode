/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    
     const arr = [...nums].sort((a, b) => a - b);
    return nums.map(num => arr.indexOf(num));
};

//     let arr = [];
  
    
//     for(let i=0; i<nums.length; i++){
//         let smaller = 0
        
//         for(let j = 0; nums.length; j ++){
          
//             if (nums[i]> nums[j]){
//                 smaller++
//             }
//         }
//         arr[i] = smaller
//     }
//     return arr
// };
