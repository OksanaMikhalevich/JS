// const urlString = "https://jsonplaceholder.typicode.com/users";
//
// const promise = fetch(urlString);
//
// promise
//     .then(response => {return response.json()})
//     .then(array => {
//
//         for (let i = 0; i < array.length; i++) {
//
//             let divElement = document.createElement('div');
//             let reference    = document.createElement('a');
//
//             divElement.setAttribute('id',`${array[i].id}`);
//             divElement.innerHTML =`<strong>id</strong> - ${array[i].id}, <strong>name</strong> - ${array[i].name}`;
//
//             reference.innerText = 'Click me'
//             // reference.href = 'user-details.html'
//             reference.onclick = function (){
//
//                 fetch('http://localhost:63342/JS/JS/Project/user-details.html?_ijt=1ls3rn0i9a8o36k7njrbv4rjf7&_ij_reload=RELOAD_ON_SAVE',{
//                     method:'POST',
//                     headers:{'Accept':'application/json',
//                     'Content-Type':'application/json'},
//                     body: JSON.stringify(array[i])
//                 }).then(value => value.json())
//                     .then(value => console.log(value))
//             }
//
//             divElement.appendChild(reference)
//             document.body.appendChild(divElement);
//
//         }
//     });

//В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,
// которая имеет детальную информацию про объект на который кликнули


fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return response.json()
    })
    .then(usersData => {

        let usersDataWrap = document.createElement('div');
        usersDataWrap.classList.add('users');
        document.body.appendChild(usersDataWrap);

        for (let userData of usersData) {

            let userDataWrap = document.createElement('div');
            userDataWrap.classList.add('user');

            let reference = document.createElement('a');
            reference.innerHTML = `<strong>${userData.id} - ${userData.name}</strong>`;
            reference.href = `./user-details.html?details=${JSON.stringify(userData)}`;

            userDataWrap.appendChild(reference);
            usersDataWrap.appendChild(userDataWrap);

        }
    })