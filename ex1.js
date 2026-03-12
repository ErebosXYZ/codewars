// DESCENDING ORDER
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Si el nombre és negatiu return
// Convertir el número que agafa com a argument en string i ordenar-lo?
function integerSort(int) {
    if (int < 0) {
        return 0;
    }
    else {
        var digits = int.toString().split("");
        var sortedDigits = digits.sort(function (a, b) { return b.localeCompare(a); });
        return parseInt(sortedDigits.join(""));
    }
}
console.log(integerSort(42145));
// Expected output: 54421
console.log(integerSort(-145263));
// Expected output: 654321
console.log(integerSort(123456789));
// Expected output: 987654321

export default integerSort;
