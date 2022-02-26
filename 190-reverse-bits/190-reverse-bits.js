/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    //2진법 쪼개 뒤집어 합쳐
    var bitReverse = n.toString(2).padStart(32,'0').split("").reverse().join("");
    //padStart(32,'0')은 32길이에 부족하면 좌측부터 0으로 채워
    return parseInt(bitReverse, 2);
};