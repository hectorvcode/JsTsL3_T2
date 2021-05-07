/**
 * Ejercicio 6 Substituting Variables Into Strings: Padded Numbers
 * Complete the solution so that it returns a formatted string. The return value should equal
 * "Value is VALUE" where value is a 5 digit padded number.
 * Example:
 * solution(5) // should return "Value is 00005"
**/


 export function solution(value){
    const answ = value.toString().padStart(5, "0")
    return `Value is ${answ}`
}

