// Part 1
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(postsUser => postsUser.json())
    .then(postsData => {

        for (let postData of postsData) {

            let postDataWrap = document.createElement('div');
            let button       = document.createElement('button');

            postDataWrap.innerHTML =
                ` <h2>Id    - ${postData.id}</h2>
                  <h3>Title - ${postData.title}</h3>
                  <h4>Body  - ${postData.body}</h4>
                `

            button.innerText    = 'Перейти до коментарів';
            button.style.margin = '30px';

            button.onclick = function (id) {

                fetch('https://jsonplaceholder.typicode.com/posts/' + postData.id + '/comments')
                    .then(commentsPosts => commentsPosts.json())
                    .then(commentsData  => {

                        for (let commentData of commentsData) {

                            if (postData.id === commentData.postId) {

                                let commentDataWrap = document.createElement('div');

                                commentDataWrap.innerHTML =
                                    `
                                      <h4>Name:${commentData.name}</h4>
                                      <strong>Email:${commentData.email}</strong>
                                      <p>Body:${commentData.body}</p>
                                    `

                                postDataWrap.appendChild(commentDataWrap);

                            }
                            button.disabled = true;
                        }
                    })
            }

            postDataWrap.appendChild(button);
            document.body.appendChild(postDataWrap);
        }
    })



