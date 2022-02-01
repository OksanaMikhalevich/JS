// Part 1
// Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.

let array = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ];
let result = array[0] + array[1] + array[2] + array[3] + array[4] + array[5] + array[6] + array[7] + array[8] + array[9];
console.log(result);

// Part 2
// Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

let book1 = {
    name: 'Мистецтво говорити',
    pages : 304,
    genre : 'психологія',
}

console.log(book1);

// Part 3
// Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори

let book2 = {
    name: 'Гаррі Поттер і філософський камінь',
    pages : 320,
    genre : 'фантастика',
    author : 'Джоан Роулінг',
}

console.log(book2);

// Part 4
// Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт

let books = [book1, book2];

console.log(books[0]);
console.log(books[1]);

// Part 5
// Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.

let square = {
    height: 23,
    width: 10,
}
let s = (square.height * square.width);

console.log('height = ', square.height + " см");
console.log('width = ', square.width + " см");
console.log('square = ', s + " см");

// Part 6
// Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.

const PI = 3.14;
let heightC = 10;
let dC = 4;
let rC = (dC / 2);
let v = (PI * Math.pow(rC,2) * heightC);
console.log('volume = ', v + " м");

// Part 7
// У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).

let n = 3;
let m = 4;
let k = Math.sqrt(Math.pow(n,2) + Math.pow(m,2));
console.log('k = ', k);