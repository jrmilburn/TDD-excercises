const capitalise = require('./capitalise');
const reverseString = require('./reverseString');
const calculator = require('./calculator');
const caesar = require('./caesar-cipher');
const analyseArray = require('./analyse-array');

test('capitalise first letter', () => {
    expect(capitalise('joe')).toBe('Joe');
}); 

test('reverse string joe', () => {
    expect(reverseString('joe')).toBe('eoj');
});

test('reverse string hello', () => {
    expect(reverseString('hello')).toBe('olleh');
});

const calc = new calculator;

test('addition', () => {
    expect(calc.add(1, 2)).toEqual(3);
})

test('subtraction', () => {
    expect(calc.subtract(5, 2)).toEqual(3);
});

test('multiplication', () => {
    expect(calc.multiply(2, 4)).toEqual(8);
});

test('division', () => {
    expect(calc.divide(6,3)).toEqual(2);
});

test('caesar cipher shift 1', () => {
    expect(caesar('abc', 3)).toBe('def');
});

test('caesar cipher shift 2', () => {
    expect(caesar('abc', 4)).toBe('efg');
});

test('caesar cipher shift 3', () => {
    expect(caesar('xyz', 3)).toBe('abc');
});

test('caesar cipher capitalisation', () => {
    expect(caesar('heLLo', 1)).toBe('ifMMp');
});

test('caesar cipher punctuation', () => {
    expect(caesar('Hello, World!', 3)).toBe('Khoor, Zruog!')
});

const array = new analyseArray;
const object = {
                   average: 4,
                   min: 1,
                   max: 8,
                   length: 6
                };

test('analyse array 1', () => {
    expect(array.analyze([1,2,3])).toEqual({average: 2, min: 1, max: 3, length: 3});
})

test('analyse array 2', () => {
    expect(array.analyze([1,8,3,4,2,6])).toEqual(object);
})

