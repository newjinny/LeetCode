/**
 * @param {number} n
 * @param {number[]} startPos
 * @param {string} s
 * @return {number[]}
 */
var executeInstructions = function(n, startPos, s){
    let arr = []
 
    
    for(i = 0; i < s.length; i++){
        let count = 0
        let raw = startPos[1]
        let column = startPos[0]
        for(j = i; j < s.length; j++){
            if(s[j] == 'R'){
                raw++;
            }
            if(s[j] == 'L'){
                raw--;
            }
            if(s[j] == 'U'){
                column--;
            }
            if(s[j] == 'D'){
                column++;
            }
            if(raw >= n || column >= n ||raw < 0 || column < 0 ){
                break
            }else{
                count++
            }
        }
    
        arr[i] = count
    }
    return arr
};