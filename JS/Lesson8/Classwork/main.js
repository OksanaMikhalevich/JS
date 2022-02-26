//  Напишіть код, який :

// Part 1
// змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

let idMainHeader = document.getElementById('main_header');

idMainHeader.innerText = 'dec-2021';

// Part 2
// робить шириниу елементу ul 400px

let ulElement = document.getElementsByTagName('ul');
console.log(ulElement);

ulElement[0].style.width = '400px';

// Part 3
// робить шириниу всіх елементів з класом linkList шириною 50%

let linkListClass = document.getElementsByClassName('linkList');
console.log(linkListClass);

for (const linkListElement of linkListClass) {

    linkListElement.style.width = '50%';

}

// Part 4
// отримує текст який зберігається в елементі з класом listElement2

console.log(document.getElementsByClassName('listElement2'));

// Part 5
// отримує всі елементи li та змінює ім колір фону на сірий

let liElement = document.getElementsByTagName('li');
console.log(liElement);

for (const element of liElement) {

    element.style.background = 'silver';

}

// Part 6
//  отримує всі елементи 'a' та додає їм клас anchor

let aElement = document.getElementsByTagName('a');
console.log(aElement);

for (const element of aElement) {

    element.classList.add('anchor');

}

// Part 7
//  отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

let aElement1 = document.getElementsByTagName('a');
console.log(aElement1);

for (const element of aElement1) {

    if (element.innerText === 'link3') {

        element.style.fontSize = '40px';

    }
}

// Part 8
// отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

let aElement2 = document.getElementsByTagName('a');
console.log(aElement2);

for (const element of aElement2) {

    let newClassText = element.innerText;
    element.classList.add(`element_${newClassText}`);

}

// Part 9
// отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

let subHeaderClass = document.getElementsByClassName('sub-header');
console.log(subHeaderClass);

let color = prompt(`Set your color`);

for (const classElement of subHeaderClass) {

    classElement.style.backgroundColor = color;

}

// Part 10
// отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

let subHeaderClass1 = document.getElementsByClassName('sub-header');
console.log(subHeaderClass1);

let color1 = prompt(`Set your color`);

for (const classElement of subHeaderClass1) {

    if (classElement.innerText === 'content 2 segment') {

        classElement.style.color = color1;

    }

}

// Part 11
// отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

let contentClass = document.getElementsByClassName('content_1');
console.log(contentClass);

let txt = prompt(`Enter your text`);

for (const classElement of contentClass) {

    classElement.innerText = txt;

}

// Part 12
// отримати елементи p та змінити їм padding на 20px

let paragraphElement = document.getElementsByTagName('p');

for (const element of paragraphElement) {

    element.style.padding = '20px';

}

// Part 13
// отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

let textClass = document.getElementsByClassName('text2');

for (const element of textClass) {

    element.innerText = 'dec - 2021';

}