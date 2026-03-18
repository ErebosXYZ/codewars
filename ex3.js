// Who likes it?
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.
// Original version
// const likes = (a: string[]): string => {
//         if (a.length === 0) {
//             return "No one likes this";
//         } else if (a.length === 1) {
//             return `${a[0]} likes this`;
//         } else if (a.length === 2) {
//             return `${a[0]} and ${a[1]} like this`
//         } else if (a.length === 3) {
//             return `${a[0]}, ${a[1]} and ${a[2]} like this`
//         } else {
//             const rest = a.length - 2
//             return `${a[0]}, ${a[1]} and ${rest} others like this`
//         }
// }
// Cleaner version
const likes = (names) => {
    const n = names.length;
    switch (n) {
        case 0: return "no one likes this";
        case 1: return "".concat(names[0], " likes this");
        case 2: return "".concat(names[0], " and ").concat(names[1], " like this");
        case 3: return "".concat(names[0], ", ").concat(names[1], " and ").concat(names[2], " like this");
        default:
            return "".concat(names[0], ", ").concat(names[1], " and ").concat(n - 2, " others like this");
    }
};
console.log("🚀 ~ likes([]):", likes([]));
console.log("🚀 ~ likes([]):", likes(["Peter"]));
console.log("🚀 ~ likes([]):", likes(["Jacob", "Alex"]));
console.log("🚀 ~ likes([]):", likes(["Max", "John", "Mark"]));
console.log("🚀 ~ likes([]):", likes(["Alex", "Jacob", "Mark", "Max"]));
