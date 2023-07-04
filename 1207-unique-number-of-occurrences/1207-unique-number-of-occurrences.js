/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let result = {};
    arr.forEach((x) => {
        result[x] =( result[x]|| 0) + 1
    })
    
     let values = Object.values(result)
     return values.length  == new Set(values).size
};

