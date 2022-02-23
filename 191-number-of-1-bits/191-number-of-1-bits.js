/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    
return n.toString(2).split('0').join('').length;
// let count = 0;
//   while (n !== 0){
//     n = n &(n-1);
//     count ++
//   }
//   return count;
};     
