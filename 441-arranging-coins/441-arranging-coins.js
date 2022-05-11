/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let cnt = 1;
  while (n >= cnt) {
    n -= cnt;
    cnt++;
  }
  return cnt - 1;
};