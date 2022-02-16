// Part 1
// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';

let nameNormalize = (str, symbol) => {

    let split = str.split(symbol);
    let filter = split.filter(element => !(element === ''));

    return filter.join(' ');
}

console.log(nameNormalize(n1, '.'));
console.log(nameNormalize(n2, '-'));
console.log(nameNormalize(n3, '_'));

// Part 2
// створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let arrayRandom = (length, limit) => {

    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.round(Math.random() * limit));
    }

    return arr;
}
console.log(arrayRandom(10, 100));

// Part 3
//  створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

let arrayRandom1 = (length, limit) => {

    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.round(Math.random() * limit));
    }

    return arr;
}
let result = arrayRandom1(15, 500);
console.log(result.sort((a, b) => a - b));

// Part 4
// створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа

let arrayRandom2 = (length, limit) => {

    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.round(Math.random() * limit));
    }
    arr1 = arr.filter(element => element % 2 === 0);

    return arr1;
}
console.log(arrayRandom2(10, 100));

// Part 5
// створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let arrayRandom3 = (length, limit) => {

    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.round(Math.random() * limit));
    }
    arr1 = arr.map(element => `${element}`);

    return arr1;
}
console.log(arrayRandom3(10, 300));

// Part 6
// створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]


let fillArray = (length, limit) => {
    let arr = [];

    for (let i = 0; i < length; i++) {
        arr.push(Math.round(Math.random() * limit));
    }

    return arr;
}
let sortNums = (array, direction) => {

    if (!Array.isArray(array)) {
        return `Object ${array}, is not array`;
    }

    if (typeof direction !== 'string') {
        return `Object ${direction}, is not string`;
    }

    switch (direction) {
        case '>':
            array.sort((a, b) => a - b);
            break;
        case '<':
            array.sort((a, b) => b - a);
            break;
        default:
            `Unknown string:${direction}`;
            break;
    }

    return array;
}
console.log(sortNums(fillArray(10, 100), '>'));
console.log(sortNums(fillArray(10, 100), '<'));

// Part 7
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let sort = coursesAndDurationArray
    .sort((object1, object2) => object2.monthDuration - object1.monthDuration);
console.log(sort);

let filter = coursesAndDurationArray.filter(object => object.monthDuration > 5);
console.log(filter);