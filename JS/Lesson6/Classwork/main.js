// Part 1
// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'

// let name = (string, symbol) => {
//         let newArr = [];
//         if (string.includes(symbol)) {
//             let a = string.split(symbol)
//             a.forEach((item) => {
//                 if (item) newArr.push(item);
//             })
//             console.log(newArr.join(' '))
//         }
//     }
//     name(n3, '_');

// Part 2
// створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let arrayRandom = (length, limit) =>{
    let arr =[];
    for (let i = 0; i < length; i++) {
        arr.push(Math.round(Math.random() * limit));
    }
    return arr;
}
console.log(arrayRandom(10, 100));

// Part 3
//  створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

let arrayRandom1 = (length, limit) =>{
    let arr =[];
    for (let i = 0; i < length; i++) {
        arr.push(Math.round(Math.random() * limit));
    }
    return arr;
}
let result = arrayRandom1(15,500);
console.log(result.sort((a, b) => a - b));

// Part 4
// створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа

let arrayRandom2 = (length, limit) => {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.round(Math.random() * limit));
    }
     return arr
}
console.log(arrayRandom2(10,100))