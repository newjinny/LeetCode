/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let binaryNum = num.toString(2)
    let result = ''
    for(let i of binaryNum){
          result += i === '1'?  '0': '1' ;
    }
    return parseInt(result,2)
    
};
