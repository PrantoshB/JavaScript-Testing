function CapitalizeMe(aString) {
    let FinalResult = aString.charAt(0).toUpperCase() + aString.slice(1);
    return FinalResult
}

module.exports = CapitalizeMe