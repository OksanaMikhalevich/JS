// Part 1
// Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// Варіант 1
const time = +(prompt('Enter your number'));
const text = typeof time !== 'number' ? 'your data is incorrect'
                    : time < 15               ? 'first part'
                    : time >= 15 && time < 30 ? 'second part'
                    : time >= 30 && time < 45 ? 'three part'
                    : time >= 45 && time <=59 ? 'four part'
                    :                           'you enter incorrect time';
console.log(text);

// Варіант 2
if (typeof time !== 'number'){
    console.log('your data is incorrect');
}
else if (time < 15){
    console.log('first part');
}
else if (time >= 15 && time < 30){
    console.log('second part');
}
else if (time >= 30 && time < 45){
    console.log('three part');
}
else if (time >= 45 && time <= 59){
    console.log('four part');
}
else {
    console.log('you enter incorrect time');
}

// Part 2
// У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// Варіант 1
const day = +(prompt('Enter your number'));
const txt = typeof day !== 'number' ? 'your data is incorrect'
                : day <= 10             ? 'first decade'
                : day > 10 && day <= 20 ? 'second decade'
                : day > 20 && day <= 31 ? 'three decade'
                :                         'you enter incorrect day';
console.log(txt);

// Варіант 2
if (typeof day !== 'number'){
    console.log('your data is incorrect');
}
else if (day <= 10){
    console.log('first decade');
}
else if (day > 10 && day <= 20){
    console.log('second decade');
}
else if (day > 20 && day <= 31){
    console.log('three decade');
}
else {
    console.log( 'you enter incorrect day');
}

// Part 3
// У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

// Варіант 1
let test;
if (confirm('??')){
    test = 'Вірно';
}
else {
    test = 'Неправильно';
}
console.log(test);

// Варіант 2

let test1 = confirm('??!!') ? 'Вірно' : 'Неправильно';
console.log(test1);

// Part 4
// Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let a = Boolean(+(prompt('Enter your number')));
if (a){
    console.log('Вірно');
}
else {
    console.log('Невірно');
}

// Part 5
// Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається
// інфа що заплановано на цей день.

let schedule = prompt('Serial number of the day of the week');
switch (schedule){
    case '1':
        console.log('Тренування на 10 год та лекція по курсу на 20 год');
        break;
    case '2':
        console.log('ДЗ по курсу');
        break;
    case '3':
        console.log('Тренування на 10 год, візит до косметолога на 13 год та лекція по курсу на 20 год');
        break;
    case '4':
        console.log('Кардіо на 9 год та ДЗ по курсу');
        break;
    case '5':
        console.log('Тренування на 10 год, перегляд фільму та лекція по курсу на 20 год');
        break;
    case '6':
        console.log('Відпочинок в Карпатах');
        break;
    case '7':
        console.log('Гірські траси Буковель');
        break;
}

// Part 6
//  Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

let year = +(prompt('Введіть кількість днів в поточному році') % 4 === 0) ? 'Рік високосний' : 'Рік не високосний';
console.log(year);

// Part 7
// Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

let officialName = prompt('Яка "офіційна" назва JavaScript?');
if (officialName === 'ECMAScript'){
    console.log('Правильно');
}
else {
    console.log('Не знаєте? ECMAScript!');
}



