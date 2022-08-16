class Calc {
    // subtract, multiply, divide, power of, root of

    add(a: number, b: number): number{
        // const result: number = a + b;

        // if(typeof result !== 'number'){
        //     throw new Error('you must provide a number');
        // }

        return a + b;
    }

    subtract(a: number, b: number): number{
        return a - b;
    }

    multiply(a: number, b: number): number{
        return a * b;
    }

    divide(a: number, b: number): number{
        return a/b;
    }

    powerOf(a: number, b: number): number{
        return Math.pow(a, b)
    }
    
    rootOf(a: number): number{
        return Math.sqrt(a);
    }
}

export default new Calc();