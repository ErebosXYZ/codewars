import likes from './ex3';
test('It should return "no one likes this" string', () => {
    expect(likes([])).toBe("no one likes this");
})

test('It should return the first index and "likes this"', () => {
    expect(likes(["Peter"])).toBe("Peter likes this");
})

test('It should return the first  and second indexes followed by "like this"', () => {
    expect(likes(["Jacob", "Alex"])).toBe("Jacob and Alex like this");
})

test('It should return the first to third indexes followed by "like this"', () => {
    expect(likes(["Max", "John", "Mark"])).toBe("Max, John and Mark like this");
})

test('It should return the first two indexes followed by "and {the array length - 2} others" and "like this"', () => {
    expect(likes(["Alex", "Jacob", "Mark", "Max"])).toBe("Alex, Jacob and 2 others like this");
})
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.