const RomanAndIntergerRealations = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}
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
    return twoSumResult;
}

const romanToInt = function (s) {
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        let tempValue0 = s.charAt(i);
        let tempValue1 = s.charAt(i + 1);
        let tempresult = 0;
        if (i == s.length - 1) {
            tempresult = calculateTwoNumber(RomanAndIntergerRealations[tempValue0], 0, i);
        }
        else {
            tempresult = calculateTwoNumber(RomanAndIntergerRealations[tempValue0], RomanAndIntergerRealations[tempValue1], i);
        }
        result += tempresult;
    }
    return result;
};

let finalResult = romanToInt("LVIII");
console.log("result");
console.log(finalResult);