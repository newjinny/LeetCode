/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let result = [];
    
    for(let i = left; i <= right; i++){
        let splitNum = i.toString().split('')
        let num = parseInt(splitNum)
        if(splitNum.every((num)=> i % num === 0)){
            result.push(i)
        }
    }
    return result
};
