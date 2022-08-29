/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function(words, s) {
    let cnt = 0
    
    for(i = 0; i < words.length; i++){
        if(s.startsWith(words[i])){
            cnt++
    }
    }
     return cnt
};

