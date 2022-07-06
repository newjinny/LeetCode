/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arr = s.split(' ')
    let result = arr.filter(i => i.length !== 0)
    return result[result.length-1].length
   // return s.trim().split(' ').pop().length

};