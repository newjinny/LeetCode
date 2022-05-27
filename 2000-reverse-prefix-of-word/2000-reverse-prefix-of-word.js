/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
  let frontWord = [...word.slice(0,word.indexOf(ch)+1)].reverse().join("")

  let backWord = word.slice(word.indexOf(ch)+1)

  return frontWord+backWord
}
