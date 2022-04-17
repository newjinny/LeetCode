/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let map = {}
    let sum = 0

    for (let num of nums) {
        map[num] = map[num] ? map[num] + 1 : 1
    }

    for (let key in map) {
        if (map[key] === 1) sum += Number(key)
    }
    
    return sum
};
