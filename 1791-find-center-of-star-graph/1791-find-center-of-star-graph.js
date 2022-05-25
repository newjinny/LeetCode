/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    // console.log(edges[0][0])
    return edges.every( res => res.includes( edges[0][0] )) ? edges[0][0] : edges[0][1]
    // edges[0][0] === edges[1][0] || edges[0][0] === edges[1][1] ? edges[0][0] : edges[0][1];
};