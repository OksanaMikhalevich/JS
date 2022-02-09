// Part 1
// Створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і b

function square1(a, b) {
    return a * b;
}

console.log(square1(15, 20));

// Part 2
// Створити функцію яка обчислює та повертає площу кола з радіусом r

function square2(r) {
    return Math.round(Math.PI * Math.pow(r, 2));
}

console.log(square2(2));

// Part 3
// Створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function square3(r, h) {
    return Math.round(2 * Math.PI * Math.pow(r, 2) + 2 * Math.PI * r * h);
}

console.log(square3(2, 4));

// Part 4
// Створити функцію яка приймає масив та виводить кожен його елемент

function arrayCreator(a, b, c, d, e, f) {
    let arr = [a, b, c, d, e, f];
    return arr;
}

let array1 = arrayCreator(50, 60, 70, 80, 90, 100);
console.log(array1);

for (let array1Element of array1) {
    console.log(array1Element);
}

// Part 5
// Створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragraph(txt) {
    document.write(`<p>${txt}</p>`);
}

paragraph('Hello World');

// Part 6
// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function listCreator(txt) {
    document.write(`<ul>`);

    document.write(`<li>${txt}</li>`);
    document.write(`<li>${txt}</li>`);
    document.write(`<li>${txt}</li>`);

    document.write(`</ul>`);
}

listCreator('Hello World');

// Part 7
// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function listCreator1(txt, number) {
    document.write(`<ul>`);

    for (let i = 0; i < number; i++) {
        document.write(`<li>${txt}</li>`)
    }

    document.write(`</ul>`);
}

listCreator1('Hello World', 3)

// Part 8
// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function arrayCreator1(a, b, c, d, e, f) {
    let arr = [a, b, c, d, e, f]
    document.write(`<ul>`);

    document.write(`<li>${a}</li>`);
    document.write(`<li>${b}</li>`);
    document.write(`<li>${c}</li>`);
    document.write(`<li>${d}</li>`);
    document.write(`<li>${e}</li>`);
    document.write(`<li>${f}</li>`);

    document.write(`</ul>`);
    return arr;
}

console.log(arrayCreator1(50, 'number', 100, 'string', true, false));

// Part 9
// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function arrayCreator2(id, name, age) {
    document.write(`<div>`);

    document.write(`<div>${id} ${name} ${age}</div>`);

    document.write(`</div>`);
}

arrayCreator2(1, 'Oksana', 22);
arrayCreator2(2, 'Olha', 25);
arrayCreator2(3, 'Ira', 20);