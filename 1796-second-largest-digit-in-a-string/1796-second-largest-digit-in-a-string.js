/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    
    // const regex = /[^0-9]/g;
    // const number = s.replace(/[^0-9]/g, '').split('').sort((a, b) => b - a);
    // const arr =[...( new Set(number))].
    


   // return  arr.length == 1 || arr.length == 0 ? -1 : arr[1];
    
    return [...(new Set(s.replace(/[^0-9]/g, '').split('').sort((a, b) => b - a)))].length === 0 || [...(new Set(s.replace(/[^0-9]/g, '').split('').sort((a, b) => b - a)))].length === 1? -1 :[...(new Set(s.replace(/[^0-9]/g, '').split('').sort((a, b) => b - a)))][1]

};