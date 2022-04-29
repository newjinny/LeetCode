/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0
    for(let [type,color,name] of items){
    if(ruleKey === 'type'&& ruleValue === type) count ++
    if(ruleKey === 'color' && ruleValue === color) count ++
    if(ruleKey === 'name' && ruleValue === name) count ++
};

	
    return count
    };