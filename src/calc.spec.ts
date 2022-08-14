import calc from './calc';

describe('Calc', () => {
    //Pass add
    test('should add 6 to 4', () => {
        expect(calc.add(6, 4)).toBe(10)
    });

    //Fail add
    test('should add 6 to 4', () => {
        expect(calc.add(6, 4)).toBe(15)
    }); 

    // test('should fail when argument is not a number', () => {
    //     const num: unknown = '1'; 
    //     expect(() => { calc.add(6, num as number) }).toThrow("you must provide a number")
    // })

    //Pass subtract
    test('should return 2 for subtract(6, 4)', () => {
        expect(calc.subtract(6, 4)).toBe(2)
    })

    //Fail subtract
    test('should return 2 for subtract(6, 4)', () => {
        expect(calc.subtract(6, 4)).toBe(5)
    })

    //Pass multiply
    test('should multiply 5 by 2', () => {
        expect(calc.multiply(5, 2)).toBe(10)
    })

    //Fail multiply
    test('should multiply 5 by 2', () => {
        expect(calc.multiply(5, 2)).toBe(15)
    })

    //Pass divide
    test('should return 10 for divide(20, 2)', () => {
        expect(calc.divide(20, 2)).toBe(10)
    })
    
    //Fail divide
    test('should return 10 for divide(20, 2)', () => {
        expect(calc.divide(20, 2)).toBe(15)
    })

    //Pass power of
    test('should return 25 for powerOf(5, 2)', () => {
        expect(calc.powerOf(5, 2)).toBe(25)
    })

    //Fail power of
    test('should return 25 for powerOf(5, 2)', () => {
        expect(calc.powerOf(5, 2)).toBe(10)
    })
    
    //Pass root of
    test('should return 5 for rootOf(25)', () => {
        expect(calc.rootOf(25)).toBe(5)
    })
    
    //Fail root of
    test('should return 5 for rootOf(25)', () => {
        expect(calc.rootOf(25)).toBe(10)
    })

})