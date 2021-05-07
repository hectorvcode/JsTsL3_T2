"use strict";
/**
 * Ejercicio3 Vowel Count
 * Return the number (count) of vowels in the given string.
 * We will consider a, e, i, o, u as vowels for this Kata (but not y).
 * The input string will only consist of lower case letters and/or spaces.
**/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kata = void 0;
var Kata = /** @class */ (function () {
    function Kata() {
    }
    Kata.getCount = function (str) {
        // your code here
        var matchesOnString = str.match(/a|A|e|E|i|I|o|O|u|U/g);
        if (matchesOnString == null) {
            return 0;
        }
        else {
            return matchesOnString.length;
        }
    };
    return Kata;
}());
exports.Kata = Kata;
