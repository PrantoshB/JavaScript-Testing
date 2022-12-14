function ReverseString(aString) {
    let Reversed = aString.split('').reverse().join('')
    return Reversed
}

module.exports = ReverseString
