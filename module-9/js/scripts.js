/*
  Написать скрипт который собирает 3 строки клавиатуры
  и клавишу "пробел" из шаблона по заданому объекту.
  
  Для зарендереной клавиатуры реализовать поведение из
  модуля 8, подсветка нажатой клавиши, отображение символа итд.
*/


const lang = {
    en: [
        ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"],
        ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"],
        ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"]
    ]

}


const html = document.querySelector('#menu').textContent.trim();
let compiled = _.template(html);
const result = compiled(lang);
let container = document.querySelector('.container');
container.innerHTML = result;

const buttons = Array.from(document.querySelectorAll("button"));
const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./ ".split("");

window.addEventListener('keydown', function(e) {
    if (keys.includes(e.key)) {
        let currentButton = buttons.find((a) => a.innerHTML === e.key || a.innerHTML === "space")
        console.log(currentButton);
        currentButton.classList.add('keyboard__btn--active');
        setTimeout(() => currentButton.classList.remove('keyboard__btn--active'), 200);


    }
});