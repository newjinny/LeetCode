/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let num = n.toString().split('').map(Number);
    let sum = num.reduce((a,b) => parseInt(a) + parseInt(b))
    let product = num.reduce((a,b) =>  parseInt(a) * parseInt(b))

    return product-sum
};
