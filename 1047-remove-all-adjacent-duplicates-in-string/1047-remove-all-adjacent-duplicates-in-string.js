/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    const arr = s.split('')
    let result = 0
    for(i = 0; i < arr.length; i++){
        result === 0 || (arr[i] !== arr[result -1]) ? (arr[result++] = arr[i]) : result--
    }
  return arr.slice(0, result).join('');
};