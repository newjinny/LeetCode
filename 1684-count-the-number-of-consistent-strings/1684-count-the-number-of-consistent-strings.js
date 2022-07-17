/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let count = 0;
    for(const word of words){
        for(let i = 0; i < word.length; i++){
            if(!allowed.includes(word[i])){
                count++;
                break;
            }
        }
    }
    return words.length - count
    
};