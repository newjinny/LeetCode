/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    let answer = 0;
    let sortPoint = points.sort((a, b) => (a[0] > b[0] ? 1 : -1));
    for(i = 1; i < sortPoint.length; i++){
        answer = Math.max(answer, sortPoint[i][0] - sortPoint[i - 1][0])
        console.log(answer)
    }   
    return answer
};
