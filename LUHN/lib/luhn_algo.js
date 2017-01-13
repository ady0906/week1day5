function isLuhnValid(code) {
    var len = code.length
    var parity = len % 2
    var sum = 0
    for (var i = len-1; i >= 0; i--) {
        var d = parseInt(code.charAt(i))
        if (i % 2 == parity) { d *= 2 }
        if (d > 9) { d -= 9 }
        sum += d
    }
    return sum % 10
}

/* luhn_caclulate
 * Return a full code (including check digit), from the specified partial code (without check digit).
 */
function luhn_caclulate(partcode) {
    var checksum = isLuhnValid(partcode + "0")
    return checksum == 0 ? 0 : 10 - checksum
}

/* luhn_validate
 * Return true if specified code (with check digit) is valid.
 */
function luhn_validate(fullcode) {
    return isLuhnValid(fullcode) == 0
}

module.exports = luhn_validate;

// console.log(valid_credit_card(5193944000920889));
