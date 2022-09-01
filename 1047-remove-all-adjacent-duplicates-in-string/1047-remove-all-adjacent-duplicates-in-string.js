/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    const result = []
    for(i = 0; i < s.length; i++){
        if(result.length && result[result.length - 1] == s[i]){
            result.pop()
        }else {
            result.push(s[i])
        }
    }
    return result.join('')
};
    
 