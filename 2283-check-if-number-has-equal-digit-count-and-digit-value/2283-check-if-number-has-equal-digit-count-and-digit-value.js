/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
    let count = Array(num.length).fill(0)
    for( i = 0; i < num.length; i++){
        count[num[i]]++
    }

    return count.join('') === num
    
};
