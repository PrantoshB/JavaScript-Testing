const testString = require('./task1')

test('It should pass', () => {
    expect(testString('BALLOUTI')).toBe(8)
})
test('It should fail', () => {
    expect(testString('Biswas Prantosh')).toEqual('Long')
})