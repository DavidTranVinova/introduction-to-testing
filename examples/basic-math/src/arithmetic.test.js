import { add, substract, divide, multiply } from './arithmetic'

describe('add', () => {
    test('Add 34 + 43 = 77', () => {
        expect(add(34, 43)).toBe(77);
        expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    })
});

describe('subtract', () => {
    it('Subtract 49 - 24 = 25', () => {
        expect(substract(49, 24)).toBe(25);
        expect(() => substract(21, undefined)).toThrow('Substract values must be number');
    })
    
});

describe('multiply', () => {
    describe('Multiply 24 * 8 = 192', () => {
        expect(multiply(24, 8)).toBe(192);
    
        
        test('Nested multiply', () => {
            expect(multiply(21, 4)).toBe(84)
        })
    })
    
});

describe('divide', () => {
    test('Divide 121 / 11 = 11', () => {
        expect(divide(121, 11)).toBe(11);
        expect(() => divide(5, 0)).toThrow('b value must not be 0')
    })
});
