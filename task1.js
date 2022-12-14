function testString(aString) {
    if (1 < aString.length && aString.length < 10) return aString.length;
    else return "Long"
}

module.exports = testString;