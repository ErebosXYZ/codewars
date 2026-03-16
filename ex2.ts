// Which string methods should I use to achieve this?
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// La primera paraula s'hauria de mantenir tal qual

function toCamelCase(str: string): string {
    if (!str) {
        return "";
    }
    let transformedWords = str.split(/[-_]/).map((word, index) => {
        // Dividim per - i _
        // La paraula amb index 0 es manté igual
        if (index === 0) {
            return word;
        } if (index > 0) {
            const firstLetter = word.charAt(0).toUpperCase();
            const restOfWord = word.slice(1);
            return firstLetter + restOfWord;
        }
    })
    return transformedWords.join('');
}

console.log("🚀 ~ toCamelCase():", toCamelCase("the-stealth-warrior"));
console.log(`🚀 ~ toCamelCase():`, toCamelCase("The_Stealth_Warrior"));
console.log("🚀 ~ toCamelCase():", toCamelCase("The_Stealth-Warrior"));


// Pro version: function toCamelCase(str: string): string {
//   return str.split(/[-_]/).map((w, i) => i > 0 ? w.charAt(0).toUpperCase() + w.slice(1) : w).join('');
// }

export default toCamelCase;