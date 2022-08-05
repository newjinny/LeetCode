/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    const regex = /[^0-9]/g;
    const number = s
    .replace(regex, '')
    .split('')
    .sort((a, b) => b - a);
    const arr =[...( new Set(number))];
    console.log(arr)
    


  return  arr.length == 1||arr.length ==0 ? -1 : arr[1];

};