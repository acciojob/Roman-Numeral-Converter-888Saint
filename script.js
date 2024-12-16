function convertToRoman(num) {
    // Define Roman numeral mappings with subtraction rules included
    const romanNumerals = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];

    let romanNumeral = "";

    // Loop through the mappings to construct the Roman numeral
    for (const [symbol, value] of romanNumerals) {
        while (num >= value) {
            romanNumeral += symbol;
            num -= value;
        }
    }

    return romanNumeral;
}

// Test the function
console.log(convertToRoman(14));    // Output: XIV
console.log(convertToRoman(798));   // Output: DCCXCVIII
console.log(convertToRoman(36));    // Output: XXXVI
console.log(convertToRoman(1994));  // Output: MCMXCIV
console.log(convertToRoman(12345)); // Output: MMMMMMMMMMMMCCCXLV

// Do not edit below this line
module.exports = convertToRoman;
