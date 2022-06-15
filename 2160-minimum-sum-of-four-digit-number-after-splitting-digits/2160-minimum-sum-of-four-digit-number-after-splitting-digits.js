/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    const newArr = num.toString().split('')
    newArr.sort((a,b)=> a-b)
  
    return parseInt(newArr[0] + newArr[2]) + parseInt(newArr[1] + newArr[3]) 
};