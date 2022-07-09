/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
      let counter = 0;
    
    for (let i = 0; i < strs[0].length; i++) {
        let a = "";
        
        for (let str of strs) {
            a += str[i];
        }
        
        if (a.split("").sort().join("") !== a) {
            counter++;
        }
    }
   
    return counter;
};
