/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x.toString();
    let y = x.split('').reverse().join('');
    
    return x===y;
};