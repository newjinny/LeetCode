/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    let a = 0
    let length = s.length
    
    const result = []
    
    for(const b of s){
        result.push(b === 'I' ? a++ : length--)
    }
    result.push(a)
    return result
};

