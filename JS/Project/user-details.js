//На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
// которая имеет детальную информацию про текущий пост.

let url = new URL(location.href);
let user = JSON.parse(url.searchParams.get('details'));

function userInfo(user) {
    for (const userKey in user) {

        if (typeof user[userKey] !== 'object') {
            let userWrap = document.createElement('div');
            userWrap.classList.add('user');
            userWrap.innerHTML = `<strong>${userKey}:</strong> ${user[userKey]}`;
            document.body.appendChild(userWrap);
        } else if (typeof user[userKey] === 'object') {
            userInfo(user[userKey]);
        }
    }
}

userInfo(user);

let button = document.createElement('button');
button.innerText = 'post of current user';
document.body.appendChild(button);

let postsUserWrap = document.createElement('div');
postsUserWrap.classList.add('posts');

button.onclick = function () {

    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(response => {
            return response.json();
        })
        .then(postsUser => {

            for (let postUser of postsUser) {

                let postUserWrap = document.createElement('div');
                postUserWrap.classList.add('post');
                postUserWrap.innerHTML = `<strong>Title:</strong> ${postUser.title}`;

                let referenceWrap = document.createElement('div');
                referenceWrap.classList.add('reference');
                let reference = document.createElement('a');
                reference.innerText = `postInfo`;
                reference.href = `./post-details.html?details=${JSON.stringify(postUser)}`;

                referenceWrap.appendChild(reference);
                postUserWrap.appendChild(referenceWrap);
                postsUserWrap.appendChild(postUserWrap);
            }
            button.disabled = true;
        })
}
document.body.appendChild(postsUserWrap);

