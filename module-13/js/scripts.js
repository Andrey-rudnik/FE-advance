/*
  Соединить задание 1 и 2
  
  Напишите функцию validate которая проверяет все поля формы 
  и возвращает результат в виде обьекта со свойствами firstname,
  lastname и tel.
  
  Кроме того, формат объекта: в свойства записывается буль-флаг 
  уведомляющий о статусе прохождения валидации для поля.
  
  При клике на кнопку submit должна происходить проверка.
  
  Визуализировать результат проверки.
    Написать функцию showResults(results), которая принимает
    один аргумент results - объект такого формата который возвращает
    функция validate, и создает html разметку по результатам
    этого объекта.
  
    showResults добавляет в список с классом .results 
    (уже есть в html), li для каждого поля формы. В li записать:
    SUCCESS: 'имя поля' passed validation
    ERROR: 'имя поля' failed validation
  
    Для li с положительным результатом дать класс success, 
    с отрицательным error.
*/


const firstname = document.getElementById("first_name");
const lastname = document.getElementById("last_name");
const tel = document.getElementById("tel");
const submitBtn = document.getElementById("submit-btn");
const resultsList = document.querySelector(".results");
const inputs = document.querySelectorAll(".validate");
let objRes = {};

submitBtn.addEventListener("click", validate);

function validate(evt) {
    evt.preventDefault();
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].setAttribute("required", "");

    }
    objRes.boolFirstName = inputs[0].checkValidity();
    objRes.boolLastName = inputs[1].checkValidity();
    objRes.boolTel = inputs[2].checkValidity();

    if (inputs[0].checkValidity()) {
        objRes.firstname = inputs[0].value;
    }
    if (inputs[1].checkValidity()) {
        objRes.lastname = inputs[1].value;
    }
    if (inputs[2].checkValidity()) {
        objRes.tel = inputs[2].value;
    }

    console.log(objRes);
}

submitBtn.addEventListener("click", showResults);

function showResults(results) {

    resultsList.innerHTML = "";

    let lisFirst = document.createElement("li");
    if (objRes.boolFirstName) {
        lisFirst.textContent = objRes.firstname;
    } else {
        lisFirst.textContent = "Error";
    }
    resultsList.appendChild(lisFirst);

    let lisLast = document.createElement("li");
    if (objRes.boolLastName) {
        lisLast.textContent = objRes.lastname;
    } else {
        lisLast.textContent = "Error";
    }
    resultsList.appendChild(lisLast);

    let lisTel = document.createElement("li");
    if (objRes.boolTel) {
        lisTel.textContent = objRes.tel;
    } else {
        lisTel.textContent = "Error";
    }
    resultsList.appendChild(lisTel);
}