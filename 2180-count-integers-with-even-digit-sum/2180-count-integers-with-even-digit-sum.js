/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
     let count = 0;

  for (let i = 1; i <= num; i++) {
    let n = i.toString().split("").reduce((a, b) => +a + +b);
    if (n % 2 === 0) {
      count++;
    }
  }

  return count;
};