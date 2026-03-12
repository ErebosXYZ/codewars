import integerSort from "./ex1";

test('it should return some sample numbers in descending order', () => {
    expect(integerSort(123456789)).toBe(987654321);
});

test('it should not return negative sample numbers in descending order', () => {
    expect(integerSort(-654321)).toBe(0);
});