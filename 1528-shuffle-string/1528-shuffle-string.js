/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {

    const result = [];
   
    
    for(let i=0; i<s.length; i++) {
        const arr = s.split('')
        result[indices[i]] = arr[i]
         
        }
  return result.join("")

};