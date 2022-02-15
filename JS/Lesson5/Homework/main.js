// Part 1
// створити функцію яка обчислює та повертає площу прямокутника

let squareRectangle = (a, b) => a * b;
console.log(squareRectangle(2, 4));

// Part 2
// створити функцію яка обчислює та повертає площу кола

let square = (r) => Math.round(Math.PI * Math.pow(r, 2));
console.log(square(4));

// Part 3
// створити функцію яка обчислює та повертає площу циліндру

let squareCylinder = (r, h) => Math.round(2 * Math.PI * r * (h + r));
console.log(squareCylinder(2, 4));

// Part 4
// створити функцію яка приймає масив та виводить кожен його елемент

let arrayCreator = (a, b, c, d, e, f, g, h) => {
    arr = [a, b, c, d, e, f, g, h];
    return arr;
}
console.log(arrayCreator(45, 46, 454, 96, 78, 'number', true, 'string'));

// Part 5
// створити функцію яка  створює параграф з текстом. Текст задати через аргумент

let paragraph = (tht) => document.write(`<p>${tht}</p>`);
paragraph(`Hello World`);

// Part 6
// створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let listCreator = (txt) => {

    document.write(`<ul>`);

    document.write(`<li>${txt}</li>`);
    document.write(`<li>${txt}</li>`);
    document.write(`<li>${txt}</li>`);

    document.write(`</ul>`);
}

listCreator(`Hello World`);

// Part 7
// створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let listCreator1 = (txt, number) => {
    document.write(`<ul>`);

    for (let i = 0; i < number; i++) {
        document.write(`<li>${txt}</li>`);
    }

    document.write(`</ul>`);
}

listCreator1(`Hello World`, 3);

// Part 8
// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let listCreator2 = (...arr) => {
    arr = [...arr];
    document.write(`<ul>`);

    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }

    document.write(`</ul>`);

}

listCreator2(25, true, 'number', 45, false, 'string', 89, 99, 56, 'boolean');

// Part 9
// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let arrayCreator2 = (id, name, age) => {
    document.write(`<div>`);

    document.write(`<div>${id} ${name} ${age}</div>`);

    document.write(`</div>`);
}

arrayCreator2(1, 'Oksana', 22);
arrayCreator2(2, 'Olha', 25);
arrayCreator2(3, 'Ira', 20);