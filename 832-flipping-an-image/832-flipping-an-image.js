/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    const result = []
    for(let i= 0 ; i<image.length; i ++){
        result.push(image[i].map((a) => a ==1? 0 : 1).reverse())
    }
        return result
};
//         const map=[]
// 	for(let i=0; i< image.length; i++){
// 		map.push(image[i].map((a)=> a===1 ? 0:1).reverse())
// 	}
//    return map
// };