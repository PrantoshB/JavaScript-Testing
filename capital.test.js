const CapitalizeMe = require('./task4')

test(`It's Capitalizing`, () => {
    expect(CapitalizeMe("whatsapp")).toEqual("Whatsapp")
})