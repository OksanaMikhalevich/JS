// Part1
// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log , alert, document.write

console.log('\t\t\t\tPart 1');

// String
let hello = 'hello';
let owu = 'owu';
let com = 'com';
let ua = 'ua';

// Number
let number_1 = 1;
let number_10 = 10;
let number_999 = -999;
let number_123 = 123;
const PI = 3.14;
const E = 2.7;
let number_16 = 16;

// Boolean
let bool_true = true;
let bool_false = false;

// Console
console.log(hello);
console.log(owu);
console.log(com);
console.log(ua);
console.log(number_1);
console.log(number_10);
console.log(number_999);
console.log(number_123);
console.log(PI);
console.log(E);
console.log(number_16);
console.log(bool_true);
console.log(bool_false);
console.log(
    hello, "\n",
    owu, "\n",
    com, "\n",
    ua, "\n",
    number_1, "\n",
    number_10, "\n",
    number_999, "\n",
    number_123, "\n",
    PI, "\n",
    E, "\n",
    number_16, "\n",
    bool_true, "\n",
    bool_false
);

// Document.write
document.write(hello, "<br/>");
document.write(owu, "<br/>");
document.write(com, "<br/>");
document.write(ua, "<br/>");
document.write(number_1, "<br/>");
document.write(number_10, "<br/>");
document.write(number_999, "<br/>");
document.write(number_123, "<br/>");
document.write(PI, "<br/>");
document.write(E, "<br/>");
document.write(number_16, "<br/>");
document.write(bool_true, "<br/>");
document.write(bool_false, "<br/>");

// Alert
alert(hello);
alert(owu);
alert(com);
alert(ua);
alert(number_1);
alert(number_10);
alert(number_999);
alert(number_123);
alert(PI);
alert(E);
alert(number_16);
alert(bool_true);
alert(bool_false);

console.log('\t\t\t\tPart 2');
document.write("<hr/>");

// Part2
// Переприсвоїти кожній змінній з завдання значення на довільне.Вивести кожну змінну за допомогою: console.log , alert, document.write

// String
hello = 'hi';
owu = 'course';
com = 'gmail';
ua = 'eng';

// Number
number_1 = 10;
number_10 = 100;
number_999 = -9990;
number_123 = 1230;
number_16 = 160;

// Boolean
bool_true = false;
bool_false = true;

// Console
console.log(hello);
console.log(owu);
console.log(com);
console.log(ua);
console.log(number_1);
console.log(number_10);
console.log(number_999);
console.log(number_123);
console.log(PI);
console.log(E);
console.log(number_16);
console.log(bool_true);
console.log(bool_false);

// Document.write
document.write(hello, "<br/>");
document.write(owu, "<br/>");
document.write(com, "<br/>");
document.write(ua, "<br/>");
document.write(number_1, "<br/>");
document.write(number_10, "<br/>");
document.write(number_999, "<br/>");
document.write(number_123, "<br/>");
document.write(PI, "<br/>");
document.write(E, "<br/>");
document.write(number_16, "<br/>");
document.write(bool_true, "<br/>");
document.write(bool_false, "<br/>");

//Alert
alert(hello);
alert(owu);
alert(com);
alert(ua);
alert(number_1);
alert(number_10);
alert(number_999);
alert(number_123);
alert(PI);
alert(E);
alert(number_16);
alert(bool_true);
alert(bool_false);

console.log('\t\t\t\tPart 3');

// Part3
//Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)

let firstName  = 'Оксана';
let middleName = 'Олександрівна';
let lastName   = 'Михалевич';
let person     = firstName + " " + middleName + " " + lastName;
console.log(person);

console.log('\t\t\t\tPart 4');

// Part4
// За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

let age;
firstName  = prompt("Ім'я");
middleName = prompt("По-Батькові");
age        = prompt("Ваш вік");
console.log("Вітаю " + firstName + " " + middleName + ". " + "Тобі " + age + " " + "роки");

console.log('\t\t\t\tPart 5');

// Part5
// За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль. let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;

// Typeof
console.log("typeof a =", typeof a);
console.log("typeof b =", typeof b);
console.log("typeof c =", typeof c);

console.log('\t\t\t\tPart 6');

// Part6
// Визначити відповідний оператор в виразах що б вийшов відповідний результат. В однакових виразах не використовувати однакові оператори!!!
// 5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true

console.log('5 < 6 = ', 5 < 6);
console.log('5 > 6 = ', 5 > 6);
console.log('5 === 6 = ', 5 === 6);
console.log('5 >= 6 = ', 5 >= 6);
console.log('10 === 10 = ', 10 === 10);
console.log('10 >= 10 = ', 10 >= 10);
console.log('10 > 10 = ', 10 > 10);
console.log('10 < 10 = ', 10 < 10);
console.log('10 !== 10 = ', 10 !== 10);
console.log('123 != \'123\' = ', 123 != '123');
console.log('123 !== \'123\' = ', 123 !== '123');