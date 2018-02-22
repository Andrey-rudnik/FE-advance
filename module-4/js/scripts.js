//1.Используя логику создания массива клавиатурных строк, создать функцию addKeyboardLayout(alphabet) 
//которая на входе получает строку-алфавит и возвращает массив-массивов клавиатурных строк.
//2.Создать функцию getRandCharInRow(row) которая получает номер строки клавиатуры и возвращает случайную букву из этой строки.
//3.Создать функцию getRandCharInAlph() которая возвращает случайную букву из всего алфавита.


//---1---

const alphabet = ("qwertyuiop[]asdfghjkl;'zxcvbnm,./");

function addKeyboardLayout(alphabet) {
    const a = alphabet.slice(0, 12).split("");
    const b = alphabet.slice(12, 23).split("");
    const c = alphabet.slice(23, 33).split("");
    return [a, b, c];
}

console.log(addKeyboardLayout(alphabet));

// ---2---

let keyboardLayout = addKeyboardLayout(alphabet);;

function getRandCharInRow(row) {
    let random = Math.floor(Math.random() * keyboardLayout[row].length);
    return keyboardLayout[row][random];
}

console.log(`возвращает случайную букву из строки: ${getRandCharInRow(0)}`);
console.log(`возвращает случайную букву из строки: ${getRandCharInRow(1)}`);
console.log(`возвращает случайную букву из строки: ${getRandCharInRow(2)}`);

// ---3---

function getRandCharInAlph() {
    let random = Math.floor(Math.random() * alphabet.length);
    return alphabet[random];
}

console.log(`возвращает случайную букву из всего алфавита: ${getRandCharInAlph()}`);