/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
     if(num === 0) {
        return true
    }
    const str = num.toString()
    if(str[str.length-1] === '0') {
        return false
    }
    
    return true
};