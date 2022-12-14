const Calculator = require('./task3')

describe('We are', () => {
    test('adding 2 and 3 and the result is 5', () => {
        expect(Calculator.add(2, 3)).toBe(5)
    })
    test('subtracting 4 from 10 and the result is 6', () => {
        expect(Calculator.subtract(10, 4)).toBe(6)
    })
    test('multiplying 20 and 30 and the result is 600', () => {
        expect(Calculator.multi(20, 30)).toBe(600)
    })
    test('dividing 50 by 5 and the result is 10', () => {
        expect(Calculator.divide(50, 5)).toBe(10)
    })
})