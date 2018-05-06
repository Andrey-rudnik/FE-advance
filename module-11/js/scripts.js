/*Написать приложение для работы с REST сервисом, все функции делают запрос и возвращают Promise с которым потом можно работать.
 Реализовать следующий функционал:

функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
функция getUserById(id) - должна вернуть пользователя с переданным id.
функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
функция removeUser(id) - должна удалять из БД юзера по указанному id.
*/

const btn = document.querySelector("#js-btn");
const allUsers = document.querySelector('#all-users');
const btnUser = document.querySelector('#btn-user');
const outputOfUser = document.querySelector('#window-user');
const newUser = document.querySelector("#new-user");
const btnRemove = document.querySelector("#btn-remove");

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

btnUser.addEventListener("click", getUserById)

const addUser = () => {
    const name = (document.querySelector("#name")).value;
    const age = (document.querySelector("#age")).value;
    fetch('https://test-users-api.herokuapp.com/users', {
            method: 'POST',
            body: JSON.stringify({ name: "NEW", age: 12 }),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(response => {
            if (response.ok) return response.json();
            throw new Error("Error fetching data");
        })
        .catch(error => {
            console.error("Error:", error);
        })

}
newUser.addEventListener("click", addUser);

const removeUser = () => {
    const id = (document.querySelector("#remove-user")).value;
    fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
            method: 'DELETE',
            body: JSON.stringify({ name: "NEW", age: 12 }),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(response => {
            if (response.ok) return response.json();
            throw new Error("Error fetching data");
        })
        .catch(error => {
            console.error("Error:", error);
        })

}
btnRemove.addEventListener("click", removeUser);