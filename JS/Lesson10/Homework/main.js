// Part 1
// Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

document.getElementById('click').onclick   = function () {
    document.getElementById('text').hidden = true;
    // Або
    // document.getElementById('text').style.display = 'none';
}

// Part 2
// Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let clickOfMe = document.getElementById('click_of_me');

clickOfMe.onclick    = function () {
    clickOfMe.hidden = true;
}

// Part 3
// створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

document.getElementById('btn1').onclick = function () {

    let humanAge = document.getElementById('human_age').value;

    if (humanAge <= 18) {
        alert(`You are ${humanAge} years old. Not allowed to view`);
    }
    else if (humanAge > 18) {
        alert(`You are ${humanAge} years old. Allowed to view`)
    }
    else if (!humanAge && humanAge === 0) {
        alert(`Data entered incorrectly`)
    }
}

// Part 4
// Создайте меню, которое раскрывается/сворачивается при клике

document.getElementById('btn2').onclick = function () {

    let li = document.getElementById('menu');

    if (li.hidden === true) {
        li.hidden = false;
    }
    else if (li.hidden === false) {
        li.hidden = true;
    }
}

// Part 5
// Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.

let comments = [
    {username: 'Оксана', speak: 'Друже, го на каву'},
    {username: 'Бодя',   speak: 'Йдемо на фільм'},
    {username: 'Катя',   speak: 'Оххх багато на дз задали'},
    {username: 'Іра',    speak: 'Вчу англійську'},
]


for (let comment of comments) {

    let divElement    = document.createElement('div');
    let strongElement = document.createElement('strong');
    let pElement      = document.createElement('p');
    let brElement     = document.createElement('br');
    let button        = document.createElement('button');

    strongElement.innerText = `${comment.username}\n`;
    pElement.innerText      = `${comment.speak}`;
    button.innerText        = `Клікни і закрий`

    divElement.append(strongElement, pElement, button)
    document.body.append(divElement, brElement);

    button.onclick      = function () {
        pElement.hidden = true;
    }
}
