"use strict";
/**
 * Ejercicio 2 Highest and Lowest
 * In this little assignment you are given a string of space separated numbers,
 * and have to return the highest and lowest number.

 Example:

 highAndLow("1 2 3 4 5");  // return "5 1"
 highAndLow("1 2 -3 4 5"); // return "5 -3"
 highAndLow("1 9 3 4 -5"); // return "9 -5"
 Notes:

 All numbers are valid Int32, no need to validate them.
 There will always be at least one number in the input string.
 Output string must be two numbers separated by a single space, and highest number is first.
**/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kata = void 0;
var Kata = /** @class */ (function () {
    function Kata() {
    }
    Kata.highAndLow = function (numbers) {
        // throw new NotImplementedException() ?
        // No, wait, this is TypeScript.
        var stringModified = numbers.split(" ").map(function (string) { return parseInt(string); }).sort(function (a, b) { return a - b; });
        var numeroMenor = stringModified[0];
        var numeroMayor = stringModified[stringModified.length - 1];
        var answer = numeroMayor + " " + numeroMenor;
        return answer;
    };
    return Kata;
}());
exports.Kata = Kata;
