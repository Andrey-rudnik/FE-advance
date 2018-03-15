let keyTrainer = {

    // properties

    chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
    charCount: 0,
    task: [],
    userInput: [],
    userErrors: 0,
    errorsArray: [],

    //method

    //метод setCharCount делает запрос через prompt о количестве символов, которые пользователь должен будет набрать.
    setCharCount: function() {
        let a = parseInt(prompt("Enter the number of characters", ""));
        this.charCount = this.checkPositiveInteger(a);
    },

    //метод checkPositiveInteger проверяет является ли число целым положительным числом. 
    //   Использование метода checkPositiveInteger в методе setCharCount для проверки корректности ввода пользователем. Если ввод неверный, 
    //   используйте цикл while для того чтобы запрашивать у пользователя верное число (целое положительное).
    checkPositiveInteger: function(a) {
        if (a >= 0) {
            return a;
        } else {
            while (a < 0) {
                return this.setCharCount();
            }
        }
    },

    //метод createTask создает массив длинной в charCount и заполняет его случайными буквами из массива chars.
    createTask: function() {
        for (i = 0; i < this.charCount; i++) {
            let random = Math.floor(Math.random() * this.chars.length);
            this.task.push(this.chars[random]);
        }
    },

    //Создайте метод startTask, который с помощью prompt выводит строку из массива task и просит набрать эту строку в этом же prompt сообщении.
    startTask: function() {
        let b = prompt(`Type this line: ${this.task.join("")}`, "");
        this.userInput = b.split(""); //Результат, полученный методом startTask запишите в свойство userInput
        for (i = 0; i < this.task.length; i++) {
            if (this.task[i] !== this.userInput[i]) {
                this.errorsArray.push(`${this.task[i]} !== ${this.userInput[i]}`); //Если симовол не совпадает, 
            } //то запишите количество ошибок в свойство userErrors.
        }
        this.userErrors = this.errorsArray.length;
    },

    //Выведите в консоль userErrors: eсли количество ошибок 0, то поздравьте, 
    // если отлично от ноля - напишите количество ошибок и пожелание успехов в следующем упражнении.

    showResult: function() {
        console.log(this.userErrors);
        if (this.userErrors === 0) {
            console.log("Сongratulating");
        } else {
            console.log(`Quality of mistakes is ${this.userErrors}, I wish you success in the next exercise `);
        }

    }
}

function run() {
    keyTrainer.setCharCount();
    // console.log(keyTrainer.charCount);
    keyTrainer.createTask();
    // console.log(keyTrainer.task);
    keyTrainer.startTask();
    // console.log(keyTrainer.userErrors);
    keyTrainer.showResult();
}

run();