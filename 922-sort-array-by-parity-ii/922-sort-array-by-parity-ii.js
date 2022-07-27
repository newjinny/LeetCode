/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let result =[]
    let odd = 1
    let even = 0
    for(i = 0; i < nums.length; i++){
        if(nums[i]%2==0){
            result[even] = nums[i]
            even += 2
            
        }else{
            result[odd] = nums[i]
            odd += 2
        }
    }
        return result
    
    
};