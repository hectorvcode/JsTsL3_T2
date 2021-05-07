"use strict";
/**
 * Ejercicio 6 Substituting Variables Into Strings: Padded Numbers
 * Complete the solution so that it returns a formatted string. The return value should equal
 * "Value is VALUE" where value is a 5 digit padded number.
 * Example:
 * solution(5) // should return "Value is 00005"
**/
Object.defineProperty(exports, "__esModule", { value: true });
exports.solution = void 0;
function solution(value) {
    var answ = value.toString().padStart(5, "0");
    return "Value is " + answ;
}
exports.solution = solution;
