//Создать две кнопки в HTML: start и stop.
//Реализовать функционал таймера отсчета старта печати через функцию-конструктор со свойсвами startTime, stopTime и interval.
// Добавить в prototype методы start и stop.
//При нажатии на кнопку start, функция сохраняет момент нажатия в свойство startTime.
//При нажатии на кнопку stop, функция сохраняет значение текущего момента времени в stopTime и записывает разницу между startTime и stopTime в interval.
//При нажатии на stop, значение interval выводится в консоль.

function Timer(startTime, stopTime, interval) {
    this.startTime = startTime;
    this.stopTime = stopTime;
    this.interval = interval;
}

const timer = new Timer();

const btnStart = document.querySelector('.start');
const btnStop = document.querySelector('.stop');

btnStart.addEventListener('click', start);
btnStop.addEventListener('click', stop);

function start(e) {
    e.preventDefault();
    timer.startTime = Date.now();
}

function stop(e) {
    e.preventDefault();
    timer.stopTime = Date.now();
    timer.interval = timer.stopTime - timer.startTime;
    console.log(timer.interval);
}