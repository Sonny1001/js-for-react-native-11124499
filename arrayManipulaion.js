function processArray(arrayOfNumbers) {
    return arrayOfNumbers.map(num => {
        if (num % 2 === 0) {
            return num * num; // Squares the number if it is even
        } else {
            return num * 3; // Triples the number if it is odd
        }
    });
}