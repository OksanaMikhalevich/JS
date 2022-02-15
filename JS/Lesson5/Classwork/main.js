// Part 1
// створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let functionMin = (number1, number2, number3) => {
    array = [number1, number2, number3];

    let arr = array[0];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number' && array[i] < arr) {
            arr = array[i];
        }
    }
    return arr;
}
console.log(functionMin(1, 2, 3));

// Part 2
//  створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let functionMax = (number1, number2, number3) => {
    array = [number1, number2, number3];

    let arr = array[0];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number' && array[i] > arr) {
            arr = array[i];
        }
    }
    return arr;
}
console.log(functionMax(3, 4, 5));

// Part 3
// створити функцію яка повертає найбільше число з масиву

let arrayMax = (array) => {

    if (!Array.isArray(array)) {
        return `Object ${array} is not array`;
    } else if (array.length === 0) {
        return `The array is empty`;
    }

    let arr = array[0];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number' && array[i] > arr) {
            arr = array[i];
        }
    }
    return arr;
}
console.log(arrayMax([45, 78, 56, 2, 896, 354, 235, 47, 63]));
console.log(arrayMax([]));

// Part 4
// створити функцію яка повертає найменьше число з масиву

let arrayMin = (array) => {

    if (!Array.isArray(array)) {
        return `Object ${array} is not array`;
    } else if (array.length === 0) {
        return `The array is empty`;
    }

    let arr = array[0];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number' && array[i] < arr) {
            arr = array[i];
        }
    }
    return arr;
}
console.log(arrayMin([45, 78, 56, 2, 896, 354, 235, 47, 63]));
console.log(arrayMin([]));

// Part 5
// створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let sumOfElements = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            sum += array[i];
        } else if (typeof array[i] !== 'number') {
            return `An array of non-numeric elements`;
        }
    }
    return sum;
}
console.log(sumOfElements([1, 2, 3, 4, 5]));
console.log(sumOfElements([1, 2, 3, 4, 5, 'string']));

// Part 6
// створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let averageValue = (array) => {
    if (!Array.isArray(array)) {
        return `${array} is not array`;
    }
    if (array.length === 0) {
        return `The array is empty`;
    }

    let average = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            average += array[i] / array.length;
        } else {
            return `Аn array of non-numeric elements`;
        }
    }
    return Math.round(average);
}
console.log(averageValue([1, 2, 3, 4, 5, 29, 52, 73, 24]));
console.log(averageValue([1, 2, 3, 4, 5, 'string', 'boolean', true]));

// Part 7
// створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

let functionMaxMin = (array) => {
    if (array.length === 0) {
        return `The array is empty`;
    }
    for (let arrayElements of array) {
        if (typeof arrayElements !== `number`) {
            return `Аn array of non-numeric elements`;
        }
    }

    let min = array[0];
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        } else if (array[i] < min) {
            min = array[i];
        }
    }
    console.log(max);
    return min;
}
console.log(functionMaxMin([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(functionMaxMin([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'number']));
console.log(functionMaxMin([]));

// Part 8
// створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

let functionRandom = (length) => {
    let array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.round(Math.random() * 100));
    }
    return array;
}
console.log(functionRandom(10));

// Part 9
// створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

let functionRandom1 = (length, limit) => {
    let array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.round(Math.random() * limit));
    }
    return array;
}
console.log(functionRandom1(10, 599));

// Part 10
// Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let arrayRevers = (...array) => {
    if (!Array.isArray(array)) {
        return `Object ${array} is not array`;
    }
    if (array.length === 0) {
        return `The array is empty`;
    }
    for (let arrayElement of array) {
        if (typeof arrayElement !== 'number') {
            return `Аn array of non-numeric elements`;
        }
    }

    let arrRevers = [];

    for (let i = array.length - 1; i >= 0; i--) {
        arrRevers.push(array[i]);
    }
    return arrRevers;
}
console.log(arrayRevers(1, 2, 3, 4, 5));
console.log(arrayRevers(1, 2, 3, 4, 5, 'number'));
console.log(arrayRevers());