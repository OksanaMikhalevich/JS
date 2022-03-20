// Part 1
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

fetch('https://jsonplaceholder.typicode.com/posts')
.then(usersPosts => usersPosts.json())
.then(postsData  => {

    let divWrap = document.createElement('div');
    divWrap.classList.add('postWrap');

    for (let postData of postsData) {


        let divWrapPost = document.createElement('div');
        divWrapPost.classList.add('postData');
        divWrapPost.innerText = `Id - ${postData.id} \n\n Title - ${postData.title} \n\n Body - ${postData.body} \n`;

    divWrap.appendChild(divWrapPost);
    document.body.appendChild(divWrap);
    }


})

// Part 2
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
.then(usersComments => usersComments.json())
.then(commentsData  => {

    for (let commentData of commentsData) {

        let divWrap = document.createElement('div');
        divWrap.classList.add('comment');

        let divWrapComment = document.createElement('div');
        divWrapComment.classList.add('commentData');
        divWrapComment.innerText = `Id - ${commentData.id} \n Name - ${commentData.name} \n Email - ${commentData.email} \n\n`;

        divWrap.appendChild(divWrapComment);
        document.body.appendChild(divWrap);
    }

})