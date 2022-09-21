/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let obj = {}
    
    for ( str of strs){
        let key = [...str].sort()
        obj[key] = obj[key] ? [...obj[key], str] : [str]
    }
    return Object.values(obj)
    
};

  