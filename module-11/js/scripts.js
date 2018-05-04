/*Написать приложение для работы с REST сервисом, все функции делают запрос и возвращают Promise с которым потом можно работать.
 Реализовать следующий функционал:

функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
функция getUserById(id) - должна вернуть пользователя с переданным id.
функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
функция removeUser(id) - должна удалять из БД юзера по указанному id.
функция updateUser(id, user) - должна обновлять данные пользователя по id. user это объект с новыми полями name и age.*/

const btn = document.querySelector("#js-btn");
const allUsers = document.querySelector('#all-users');
const userById = document.querySelector('#btn-user');
const outputOfUser = document.querySelector('#output-user');

const onClick = () => {

    fetch("https://test-users-api.herokuapp.com/users")
        .then(response => {
            if (response.ok) return response.json();
            throw new Error("Error fetching data");
        })
        .then(users => {
            const obj = users;
            for (let i = 0; i < obj.data.length; i++) {
                const table = document.createElement('tr');
                table.classList.add(`class${i}`);
                allUsers.append(table);
                table.textContent = JSON.stringify(`id: ${obj.data[i].id} name: ${obj.data[i].name}  age: ${obj.data[i].age}`);
            }
        })
        .catch(error => {
            // catch обрабатывает возможную ошибку запроса
            console.error("Error: ", error);
        });
};

btn.addEventListener("click", onClick);


const getUserById = () => {

    const id = (document.querySelector('#text-user-id')).value;
    fetch(`https://test-users-api.herokuapp.com/users/${id}`)
        .then(response => {
            if (response.ok) return response.json();
            throw new Error("Error fetching data");
        })
        .then(user => {
            const object = user;
            outputOfUser.textContent = JSON.stringify(`name: ${object.data.name}, age: ${object.data.age}`);
        })
        .catch(error => {
            console.error("Error:", error);
        })
}

userById.addEventListener("click", getUserById)