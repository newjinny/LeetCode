/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
      var result = 0;
    for (let i=0; i<n; i++) { 
		result ^= start + 2*i
	};
    return result;
};