/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    const set = new Set()
    for(let char of s){
        if(set.has(char))
            return char
            set.add(char)
        
    }
};
  
//     const newSet = {}
    
//     for(i = 0; i < s.length; i++){
//         if(!newSet[s[i]]){
//             newSet[s[i]] = 1
//         } else{
//             return s[i]
//         }
//     }
// };
