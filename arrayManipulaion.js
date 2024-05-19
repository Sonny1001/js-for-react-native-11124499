function processArray(arrayOfNumbers) {
    return arrayOfNumbers.map(num => {
        if (num % 2 === 0) {
            return num * num; // Squares the number if it is even
        } else {
            return num * 3; // Triples the number if it is odd
        }
    });
}


function formatArrayStrings(strings, numbers) {
    return strings.map((str, number) => {
        const num = numbers[number];
        if (num % 2 === 0) {
            return str.toUpperCase(); // Capitalizes the string if the number is even
        } else {
            return str.toLowerCase(); // Converts the string to lowercase if the number is odd
        }
    });
}


module.exports = { processArray, formatArrayStrings };