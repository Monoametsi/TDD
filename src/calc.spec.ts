import calc from './calc';

describe('Calc', () => {
    test('should return 10 for add(6, 4)', () => {
        expect(calc.add(6, 4)).toBe(10)
    })

    test('should return 5 for add(6, -1)', () => {
        expect(calc.add(6, -1)).toBe(5)
    })
})