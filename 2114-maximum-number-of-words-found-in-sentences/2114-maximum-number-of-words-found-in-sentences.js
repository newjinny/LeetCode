/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let res = 0;
    
  for (let i=0; i<sentences.length;i++) {
    let word = sentences[i].split(" ").length;
      
     
      res = Math.max(res, word)
    // if(res < word ) {
    //   res = word;
    // }
  }
  return res;
};

