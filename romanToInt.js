const calculateTwoNumber = require('./calculateTwoNumber.js');
const RomanAndIntergerRealations = require('./RomanAndIntergerRealations.js');

const romanToInt = function (s) {
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        let tempValue0 = s.charAt(i);
        let tempValue1 = s.charAt(i + 1);
        let tempresult = 0;
        if (i == s.length - 1) {
            tempresult = calculateTwoNumber(RomanAndIntergerRealations[tempValue0], 0, i).twoSumResult;
            i = calculateTwoNumber(RomanAndIntergerRealations[tempValue0], 0, i).index;
        }
        else {
            tempresult = calculateTwoNumber(RomanAndIntergerRealations[tempValue0], RomanAndIntergerRealations[tempValue1], i).twoSumResult;
            i = calculateTwoNumber(RomanAndIntergerRealations[tempValue0], RomanAndIntergerRealations[tempValue1], i).index;
        }
        result += tempresult;
    }
    return result;
};

module.exports = romanToInt;

