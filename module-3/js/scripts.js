const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

let firstLine = alphabet.slice(0, 12).split("");
let secondLine = alphabet.slice(12, 23).split("");
let thirdLine = alphabet.slice(23, 33).split("");


const keyboard = [firstLine, secondLine, thirdLine];
console.log(keyboard);
console.log(secondLine[5] + firstLine[2] + secondLine[8] + secondLine[8] + firstLine[8]);
console.log(secondLine[6] + secondLine[0] + thirdLine[3] + secondLine[0] + secondLine[1] + thirdLine[2] + firstLine[3] + firstLine[7] + firstLine[9] + firstLine[4]);
console.log(firstLine[4] + firstLine[3] + secondLine[0] + firstLine[7] + thirdLine[5] + firstLine[2] + firstLine[3]);