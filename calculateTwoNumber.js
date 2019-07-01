function calculateTwoNumber(firstNumber, secondNumber, index) {
    let twoSumResult = 0;
    if (firstNumber >= secondNumber) {
        twoSumResult = firstNumber;
        index = index;
    }
    else {
        twoSumResult = secondNumber - firstNumber;
        index = index + 1;
    }
    return {
        twoSumResult,
        index
    }
}
module.exports = calculateTwoNumber;

