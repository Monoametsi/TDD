import calc from './calc';

describe('Calc', () => {
    test('should return 10 for add(6, 4)', () => {
        expect(calc.add(6, 4)).toBe(10)
    })

    test('should return 10 for subtract(6, 4)', () => {
        expect(calc.subtract(6, 4)).toBe(2)
    })

    test('should return 10 for multiply(5, 2)', () => {
        expect(calc.multiply(5, 2)).toBe(10)
    })

    test('should return 10 for divide(20, 2)', () => {
        expect(calc.divide(20, 2)).toBe(10)
    })

    test('should return 25 for powerOf(5, 2)', () => {
        expect(calc.powerOf(5, 2)).toBe(25)
    })

    test('should return 5 for rootOf(25)', () => {
        expect(calc.rootOf(25)).toBe(5)
    })
})