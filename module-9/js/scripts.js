/*
  Написать скрипт который собирает 3 строки клавиатуры
  и клавишу "пробел" из шаблона по заданому объекту.
  
  Для зарендереной клавиатуры реализовать поведение из
  модуля 8, подсветка нажатой клавиши, отображение символа итд.
*/

const lang = {
    en: "qwertyuiop[]asdfghjkl;'zxcvbnm,./"
};
let arrayString = [
    [],
    [],
    [],
];

function pushToArray(index, array, number) {
    array[index].push(number)
}
let keys = lang.en.split("");


function addKeyboardLayout(alphabet) {
    for (let i = 0; i < keys.length; i++) {
        if (i <= 11) {
            pushToArray(0, arrayString, keys[i]);
        } else if (i > 11 && i < 23) {
            pushToArray(1, arrayString, keys[i]);
        } else {
            pushToArray(2, arrayString, keys[i]);
        }
    }
}

addKeyboardLayout(lang.en)
const html = document.querySelector('#buttons').textContent.trim();

const compiled = _.template(html)(arrayString);

const container = document.querySelector('#buttons-container');
container.innerHTML = compiled;

const buttons = Array.from(document.querySelectorAll("button"))
console.log(container);

window.addEventListener("keydown", function(e) {
    if (keys.includes(e.key)) {
        console.log(e.key);
        let newButton = buttons.find((i) => i.innerHTML === e.key || i.innerHTML === "space")
        console.log(newButton);
        newButton.classList.add('keyboard__btn--active');
        setTimeout(() => {
            newButton.classList.remove('keyboard__btn--active');
        }, 200);
    }
});