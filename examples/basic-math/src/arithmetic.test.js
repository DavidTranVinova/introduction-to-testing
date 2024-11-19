import { add, substract, divide, multiply } from './arithmetic'

describe('add', () => {
    test('Add number', () => {
        expect(add(34, 43)).toBe(77);
        expect(add(0.1, 0.2)).toBeCloseTo(0.3);
        expect(add(Infinity, -Infinity)).toBe(0)
        expect(add(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER)).toBe(NaN)
        expect(add(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY)).toBe(NaN)
    })

    it('should be greater or less than', () => {
        expect(add(300, 900)).toBeGreaterThan(1100)
        expect(add(600, 900)).toBeLessThanOrEqual(1500)
        expect(add(600, 900)).not.toEqual(1550)
    })

    it('should throw add values must be number', () => {
        expect(() => add(600, undefined)).toThrow('Add values must be number')
        expect(() => add(null, 123)).toThrow('Add values must be number')
        expect(() => add(NaN, 132)).toThrow('Add values must be number')
        expect(() => add(600, null)).toThrow('Add values must be number')
    })
});

describe('subtract', () => {
    it('Subtract number', () => {
        expect(substract(49, 24)).toBe(25);
        expect(() => substract(21, undefined)).toThrow('Substract values must be number');
        expect(substract(34, 43)).toBe(-9);
        expect(substract(0.3, 0.1)).toBeCloseTo(0.2);
        expect(substract(Infinity, Infinity)).toBe(NaN)
        expect(substract(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY)).toBe(Infinity)
    })
    
    it('should be greater or less than', () => {
        expect(substract(300, 900)).toBeGreaterThan(-700)
        expect(substract(600, 900)).toBeLessThanOrEqual(-300)
        expect(substract(600, 900)).not.toEqual(-350)
    })

    it('should throw substrac values must be number', () => {
        expect(() => substract(600, undefined)).toThrow('Substract values must be number')
        expect(() => substract(null, 123)).toThrow('Substract values must be number')
        expect(() => substract(NaN, 132)).toThrow('Substract values must be number')
        expect(() => substract(600, null)).toThrow('Substract values must be number')
    })
});

describe('multiply', () => {
    describe('Multiply 24 * 8 = 192', () => {
        expect(multiply(24, 8)).toBe(192);
    
        
        test('Nested multiply', () => {
            expect(multiply(21, 4)).toBe(84)
        })
    })
    
    it('Multiply number', () => {
        expect(() => multiply(21, undefined)).toThrow('Multiply values must be number');
        expect(multiply(32, 4)).toBe(128);
        expect(multiply(32, 0)).toBe(0);
        expect(multiply(0, 32)).toBe(0);
        expect(multiply(0.2, 1.5)).toBeCloseTo(0.3);
        expect(multiply(Infinity, Infinity)).toBe(Infinity)
        expect(multiply(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY)).toBe(-Infinity)
    })
    
    it('should be greater or less than', () => {
        expect(multiply(300, 900)).toBeGreaterThan(260000)
        expect(multiply(600, 900)).toBeLessThanOrEqual(540000)
    })

    it('should throw multiply values must be number', () => {
        expect(() => multiply(600, undefined)).toThrow('Multiply values must be number')
        expect(() => multiply(null, 123)).toThrow('Multiply values must be number')
        expect(() => multiply(NaN, 132)).toThrow('Multiply values must be number')
        expect(() => multiply(600, null)).toThrow('Multiply values must be number')
    })
});

describe('divide', () => {
    it('Divide number', () => {
        expect(() => divide(121, 0)).toThrow('b value must not be 0');
        expect(() => divide(5, 0)).toThrow('b value must not be 0')
    })

    
    it('Subtract number', () => {
        expect(divide(48, 24)).toBe(2);
        expect(() => divide(21, undefined)).toThrow('Divide values must be number');
        expect(divide(0.3, 0.1)).toBeCloseTo(3);
        expect(divide(Infinity, Infinity)).toBe(NaN)
        expect(divide(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY)).toBe(NaN)
    })
    
    it('should be greater or less than', () => {
        expect(divide(300, 900)).toBeGreaterThan(-700)
        expect(divide(600, 900)).toBeCloseTo(0.6667)
        expect(divide(600, 900)).not.toEqual(-350)
    })

    it('should throw substrac values must be number', () => {
        expect(() => divide(600, undefined)).toThrow('Divide values must be number')
        expect(() => divide(null, 123)).toThrow('Divide values must be number')
        expect(() => divide(NaN, 132)).toThrow('Divide values must be number')
        expect(() => divide(600, null)).toThrow('Divide values must be number')
    })
});
