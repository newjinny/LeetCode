/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
};