"use strict";
// Which string methods should I use to achieve this?
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
Object.defineProperty(exports, "__esModule", { value: true });
// La primera paraula s'hauria de mantenir tal qual
function toCamelCase(str) {
    if (!str) {
        return "";
    }
    var transformedWords = str.split(/[-_]/).map(function (word, index) {
        // Dividim per - i _
        // La paraula amb index 0 es manté igual
        if (index === 0) {
            return word;
        }
        if (index > 0) {
            var firstLetter = word.charAt(0).toUpperCase();
            var restOfWord = word.slice(1);
            return firstLetter + restOfWord;
        }
    });
    return transformedWords.join('');
}
console.log("🚀 ~ toCamelCase():", toCamelCase("the-stealth-warrior"));
console.log("\uD83D\uDE80 ~ toCamelCase():", toCamelCase("The_Stealth_Warrior"));
console.log("🚀 ~ toCamelCase():", toCamelCase("The_Stealth-Warrior"));
// Pro version: function toCamelCase(str: string): string {
//   return str.split(/[-_]/).map((w, i) => i > 0 ? w.charAt(0).toUpperCase() + w.slice(1) : w).join('');
// }
exports.default = toCamelCase;
