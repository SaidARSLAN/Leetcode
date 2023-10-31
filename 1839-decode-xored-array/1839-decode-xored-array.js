/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    let xor = first
    const result = [first];
    for (let i = 0;i<encoded.length;i++) {
        xor = xor  ^ encoded[i]
        result.push(xor)
    }
    return result
};