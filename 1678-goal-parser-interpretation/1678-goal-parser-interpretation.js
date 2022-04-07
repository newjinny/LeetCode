/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let result =command.replaceAll("()", "o").replaceAll("(al)", "al");
    return result
    // return command.split('()').join('o').split('(al)').join('al');
};