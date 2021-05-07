/**
 * Ejercicio3 Vowel Count
 * Return the number (count) of vowels in the given string.
 * We will consider a, e, i, o, u as vowels for this Kata (but not y).
 * The input string will only consist of lower case letters and/or spaces.
**/

 export class Kata {
    static getCount(str: string) {
        // your code here
        const matchesOnString = str.match(/a|A|e|E|i|I|o|O|u|U/g)
        if(matchesOnString == null){
            return 0
        } else {
            return matchesOnString.length
        }
    }
}

