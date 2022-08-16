import calc from './calc';

describe('Calc', () => {
    //Pass add
    test('should add 6 to 4', () => {
        expect(calc.add(6, 4)).toBe(10);
    });

    // test('should throw failure if its not implemented', () => {
    //     const num: any = '4';
    //    expect(() => { calc.add(6, num) }).toThrow("you must provide a number")
    // });

    //Pass subtract
    test('should return 2 for subtract(6, 4)', () => {
        expect(calc.subtract(6, 4)).toBe(2)
    })

    //Pass multiply
    test('should multiply 5 by 2', () => {
        expect(calc.multiply(5, 2)).toBe(10)
    })

    //Pass divide
    test('should return 10 for divide(20, 2)', () => {
        expect(calc.divide(20, 2)).toBe(10)
    })

    //Pass power of
    test('should return 25 for powerOf(5, 2)', () => {
        expect(calc.powerOf(5, 2)).toBe(25)
    })
    
    //Pass root of
    test('should return 5 for rootOf(25)', () => {
        expect(calc.rootOf(25)).toBe(5)
    })

})