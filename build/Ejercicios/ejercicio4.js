"use strict";
/**
 * Ejercicio4 Disemvowel Trolls
 * Trolls are attacking your comment section!
 * A common way to deal with this situation is to remove all of the vowels from the trolls' comments,
 * neutralizing the threat.
 * Your task is to write a function that takes a string and return a new string with all vowels
 * removed.
 * For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
 * Note: for this kata y isn't considered a vowel.
**/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kata = void 0;
var Kata = /** @class */ (function () {
    function Kata() {
    }
    Kata.disemvowel = function (str) {
        //const findingVowels:string = str.match(/[^a|A|e|E|i|I|o|O|u|U|]/g).join("")
        var findingVowels = str.replace(/[a|A|e|E|i|I|o|O|u|U|]/g, "");
        return findingVowels;
    };
    return Kata;
}());
exports.Kata = Kata;
