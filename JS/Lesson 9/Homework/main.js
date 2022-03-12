// Part 1
// Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let divElement = document.createElement('div');

divElement.classList.add('wrap');
divElement.classList.add('collapse');
divElement.classList.add('alpha');
divElement.classList.add('beta');

divElement.style.background = 'red';
divElement.style.color = 'white';
divElement.style.fontSize = '24 px';

document.body.appendChild(divElement);

let divClone = divElement.cloneNode(true);
document.body.appendChild(divClone);

// Part 2
// - Є масив:
// ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let menuItem = ['Main', 'Products', 'About us', 'Contacts'];

let menuBlock = document.getElementsByClassName('menu')[0];

for (const item of menuItem) {

    let liElement = document.createElement('li');
    liElement.innerText = item;
    menuBlock.appendChild(liElement);

}

// Part 3
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const element of coursesAndDurationArray) {

    let divElement = document.createElement('div');
    divElement.innerText = `${element.title}, ${element.monthDuration}`;
    document.body.appendChild(divElement);

}

// Part 4
// - Є масив
// let coursesAndDurationArray1 = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

let coursesAndDurationArray1 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const element of coursesAndDurationArray1) {

    let divElement = document.createElement('div');
    let h1Element = document.createElement('h2');
    let pElement = document.createElement('p');

    divElement.classList.add('item');
    h1Element.classList.add('heading');
    pElement.classList.add('description');

    h1Element.innerText = element.title;
    pElement.innerText = element.monthDuration;

    divElement.appendChild(h1Element);
    divElement.appendChild(pElement);
    document.body.appendChild(divElement);

}