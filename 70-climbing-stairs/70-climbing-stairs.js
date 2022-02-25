/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 2) 
      return n;
  let step = [0,1,2]
    for (let i = 3; i <= n; i++) {
        step[i] = step[i - 1] + step[i - 2];
    }
    return step[n];
};