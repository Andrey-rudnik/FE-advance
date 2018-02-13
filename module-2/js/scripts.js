/*
   Есть три курорта: taba, sharm или hurgada.
   
   Необходимо через prompt попросить ввести число, от 1 до 3-х.
   
   В тексте prompt необходимо написать какое число соотвествует
   какому курорту, на ваш выбор.
   
   После этого вывести сообщение о том, что пользователь 
   выбрал такой-то курорт или сообщение о том, что введено
   число, варианта курорта для которого не было.
*/

let resort = parseInt(prompt('Please select the resort: 1-taba, 2-sharm, 3-hurgaga', ''));
let pleace;

if (resort === 1) {
    pleace = "Taba";
} else if (resort === 2) {
    pleace = "Sharm";
} else if (resort === 3) {
    pleace = "hurgada";
} else {
    pleace = "Please select rigt number"
}
alert(pleace);