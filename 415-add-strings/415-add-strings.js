/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
      // return (BigInt(num1)+BigInt(num2)).toString();
      let carry = 0;
    let result = [];
    
    for(let i = num1.length-1, j = num2.length-1 ; i>=0 || j>=0; i--, j--) { 
        let sum = getNum(num1[i]) + getNum(num2[j]) + carry;
        carry = sum > 9 ? 1: 0;
        result.push(sum % 10);
    }
    
    if(carry > 0) result.push(carry);
    return result.reverse().join('');
};

function getNum(num) {
    return num ? (num-0) : 0
 
};