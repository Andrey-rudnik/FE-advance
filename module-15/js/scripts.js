/*Создать две кнопки в HTML: start и stop.
  Создать класс Timer с полями startTime, stopTime и interval. Создать несколько экземпляров класса с разными значениями свойств, 
  вывести их в консоль.
  Для класса Timer создать методы start и stop, getTime.
  Создать экземпляр класса Timer, пусть он называется stopwatch.
  При нажатии на кнопку start, метод stopwatch.start сохраняет момент нажатия в свойство startTime.
  При нажатии на кнопку stop, метод stopwatch.stop сохраняет значение текущего момента времени в stopTime и записывает разницу между startTime и stopTime в interval. А метод stopwatch.getTime возвращает значение поля interval, которое необходимо вывести в консоль.
  Для класса Timer создать статический метод timeToNY который возвращает кол-во дней от сегодня и до Нового Года.*/

(function() {


    var buttonStart = document.querySelector(".start");
    var buttonStop = document.querySelector(".stop");
    var wrapper = document.getElementById('t');
    var timeend = new Date("January 01 2019 00:01:01");


    class Timer {
        constructor() {
            this.startTime
            this.stopTime
            this.interval
        }

        start() {
            let date = new Date();
            this.startTime = date;
        }

        stop() {
            let dateStop = new Date();
            this.stopTime = dateStop;
            this.interval = Math.ceil((this.stopTime - this.startTime) / 1000);
        }

        getTime() {
            console.log(`Interval: ${this.interval} sec`);
        }

        static timeToNY() {
            var today = new Date();
            today = Math.floor((timeend - today) / 1000);
            var tsec = today % 60;
            today = Math.floor(today / 60);
            if (tsec < 10) tsec = '0' + tsec;
            var tmin = today % 60;
            today = Math.floor(today / 60);
            if (tmin < 10) tmin = '0' + tmin;
            var thour = today % 24;
            today = Math.floor(today / 24);
            var timestr = today + " days " + thour + " hours " + tmin + " min " + tsec + " sec";
            return timestr;
        }

    }

    let stopwatch = new Timer();

    buttonStart.addEventListener("click", function() {
        stopwatch.start();
    });

    buttonStop.addEventListener("click", function() {
        stopwatch.stop();
        stopwatch.getTime();
    });

    wrapper.textContent = Timer.timeToNY();
    setInterval(function() {
        wrapper.textContent = Timer.timeToNY();
    }, 1000);




})();