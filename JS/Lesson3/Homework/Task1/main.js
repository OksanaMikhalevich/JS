// Part 1
// Створити масив з:
// - з 5 числових значень
// - з 5 стрічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// та вивести його в консоль

let array = [
    [365, 255, 3465, 444, 2235],
    ['one', 'two', 'three', 'four', 'five'],
    [true, false, 47, 89, 'number']
]

for (let folder of array) {
    console.log(folder);
    for (let element of folder) {
        console.log(element);
    }
}

// Part 2
// Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let array1 = [];

// Перший
// array1[0] = 25;
// array1[1] = 35;
// array1[2] = 45;
// array1[3] = 55;
// array1[4] = 65;
// console.log(array1);

// Другий
// for (let i = 0; i < 10; i++) {
// 	array1.push(i);
// }
// console.log(array1);

// Третій
for (let i = 0; i < 10; i++) {
    array1[i] = i;
    console.log(array1[i]);
}

// Part 3
// За допомогою циклу for i document.write вивести 10 блоків div з довільним текстом всередині

for (let j = 0; j < 10; j++) {
    document.write(`<div>Hello world</div>`);
}

// Part 4
// За допомогою циклу for i document.write вивести 10 блоків div з довільним текстом і індексом всередині

for (let k = 0; k < 10; k++) {
    document.write(`<div>Hello world` + k + `</div>`);
}

// Part 5
// За допомогою циклу while вивести в документ 20 блоків h1 з довільним текстом всередині

let l = 0;
while (l < 20) {
    document.write(`<h1>Hello world</h1>`);
    l++;
}

// Part 6
// За допомогою циклу while вивести в документ 20 блоків h1 з довільним текстом і індексом всередині

let m = 0;
while (m < 20) {
    document.write(`<h1>Hello world` + m + `</h1>`);
    m++;
}

// Part 7
// Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі

let array2 = [25, 35, 45, 55, 65, 75, 85, 95, 105, 115];
for (let temp of array2) {
    console.log(temp);
}

// Part 8
// Створити масив з 10 строкових елементів. Вивести в консоль всі його елементи в циклі

let array3 = ['ira', 'olha', 'oksana', 'katya', 'kira', 'mira', 'alla', 'masha', 'diana', 'romana'];

for (let n = 0; n < array3.length; n++) {
    console.log(array3[n]);
}

// Part 9
// Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі

let array4 = [true, false, 45, 'string', 'number', 89, 1055, 'boolean', 21, 369];

let p = 0;
while (p < array4.length) {
    console.log(array4[p]);
    p++;
}

// Part 10
// Створити масив з 10 елементів числового, стрічкового та булевого типу. За допомогою if та typeof вивести тільки булеві елементи

for (let temp of array4) {
    if (typeof temp === 'boolean') (
        console.log(temp)
    );
}

// Part 11
// Створити масив з 10 елементів числового, стрічкового та булевого типу. За допомогою if та typeof вивести тільки числові елементи

for (let t = 0; t < array4.length; t++) {
    if (typeof array4[t] === 'number') (
        console.log(array4[t])
    );
}

// Part 12
// Створити масив з 10 елементів числового, стрічкового та булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let r = 0;
while (r < array4.length) {
    if (typeof array4[r] === 'string') (
        console.log(array4[r])
    );
    r++;
}

// Part 13
// Створити порожній масив. Наповнити його 10 елементами (різними за типами) через зверенення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі

let array5 = [];
array5[0] = true;
array5[1] = 12;
array5[2] = 18;
array5[3] = false;
array5[4] = 13;
array5[5] = 'number';
array5[6] = 29;
array5[7] = 'string';
array5[8] = 'boolean';
array5[9] = 4;

for (let temp of array5) {
    console.log(temp);
}

// Part 14
// Створити цикл for на 10 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let s = 0; s < 10; s++) {
    console.log(s);
    document.write(`${s} <br>`);
}

// Part 15
// Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let s = 0; s < 100; s++) {
    console.log(s);
    document.write(`${s} <br>`);
}

// Part 16
// Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let s = 0; s < 100; s += 2) {
    console.log(s);
    document.write(`${s} <br>`);
}

// Part 17
// Створити цикл for на 100 ітерацій. Вивести тільки парні кроки через console.log та document.write

for (let s = 0; s < 100; s++) {
    if (s % 2 === 0) {
        console.log(s);
        document.write(`${s} <br>`);
    }
}

// Part 18
// Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки через console.log та document.write

for (let s = 0; s < 100; s++) {
    if (s % 2 === 1) {
        console.log(s);
        document.write(`${s} <br>`);
    }
}