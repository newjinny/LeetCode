/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    const newSet = {}
    
    for(i = 0; i < s.length; i++){
        if(!newSet[s[i]]){
            newSet[s[i]] = 1
        } else{
            return s[i]
        }
    }
};
