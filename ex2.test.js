import toCamelCase from './ex2';

test('It should return the words of the string in Camel Case instead of them being separated by a dash or underscore', () => {
    expect(toCamelCase("portgas-d_ace")).toBe("portgasDAce");
})

test('It should the words of the string in Pascal Case, keeping the uppercase letter of the first word and making the first letters of other words uppercase instead of separating them by a dash or underscore', () => {
    expect(toCamelCase("Gol_d-roger")).toBe("GolDRoger");
})

test('It should return an empty string if no argument is passed', () => {
    expect(toCamelCase()).toBe("");
})