/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
   return parseInt(n.toString(2).split('').map( num =>num =="0" ? "1" : "0" ).join(''),2)
   
    
};
