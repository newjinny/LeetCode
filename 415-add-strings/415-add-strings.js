/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
       let result = (BigInt(num1)+BigInt(num2)).toString();
   return result;
};