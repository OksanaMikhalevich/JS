// Part 1
// створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function min(min1, min2, min3) {
    if (min1 < min2 && min1 < min3) {
        console.log(min1);
    } else if (min2 < min1 && min2 < min3) {
        console.log(min2);
    } else {
        console.log(min3);
    }
}

min(25, 45, 2);

// Part 2
// створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function max(max1, max2, max3) {
    if (max1 > max2 && max1 > max3) {
        console.log(max1);
    } else if (max2 > max1 && max2 > max3) {
        console.log(max2);
    } else {
        console.log(max3);
    }
}

max(25, 45, 2);

// Part 3
// створити функцію яка повертає найбільше число з масиву

function arrayMax(arr) {
    return Math.max(...arr)
}

console.log(arrayMax([25, 98, 564, 788, 12, 35, 78, 856, 746, 235]));

// або

function maxArray(arr) {
    if (!Array.isArray(arr)) {
        return `Object ${arr} is not array`
    } else if (arr.length === 0) {
        return `Array is empty`;
    }

    let temp = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === `number` && arr[i] > temp) {
            temp = arr[i];
        }
    }
    return temp;
}

console.log(maxArray([46, 36, 78, 623, 450, 799, 365, 358, 'number', 'string']));
console.log(maxArray([]));

// Part 4
// створити функцію яка повертає найменьше число з масиву

function arrayMin(arr) {
    return Math.min(...arr)
}

console.log(arrayMin([25, 98, 564, 788, 12, 35, 78, 856, 746, 235]));

// або

function minArray(arr) {
    if (!Array.isArray(arr)) {
        return `Object ${arr} is not array`
    } else if (arr.length === 0) {
        return `Array is empty`;
    }

    let temp = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && arr[i] < temp) {
            temp = arr[i];
        }
    }
    return temp;
}

console.log(minArray([46, 36, 78, 623, 450, 799, 365, 358, `number`, `string`]));
console.log(minArray([]));

// Part 5
// створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let arr1 = [26, 18, 14, 27, 4, 13, 29];

function sumElementsArray(arr1) {
    let temp = 0;
    for (let arr1Element of arr1) {
        if (typeof arr1Element === `number`) {
            temp += arr1Element;
        }
    }
    return temp;
}

console.log(sumElementsArray(arr1));

// Part 6
// створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let arr2 = [26, 18, 14, 27, 4, 13, 29];

function averageValueArray(arr2) {
    let temp = 0;
    for (let arr2Element of arr2) {
        if (typeof arr2Element === `number`) {
            temp += arr2Element / arr2.length;
        }
    }
    return temp;
}

console.log(averageValueArray(arr2));

// Part 7
// створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено)

function arrayMin_Max(...arr3) {
    if (arr3.length === 0) {
        return `You call function without parameters`;
    }
    for (let arr3Element of arr3) {
        if (typeof arr3Element !== `number`) {
            return `Element ${arr3Element} in array = [${arr3}] is not a number`;
        }
    }

    let min = arr3[0];
    let max = arr3[0];

    for (let i = 1; i < arr3.length; i++) {
        if (arr3[i] < min) {
            min = arr3[i];
        } else if (arr3[i] > max) {
            max = arr3[i];
        }
    }
    console.log(`Max element - `, max);
    return `Min element - ${min}`;
}

console.log(arrayMin_Max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Part 8
// створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

function randomArray(arrayLength) {
    let arrayElementRandom = [];
    for (let i = 0; i < arrayLength; i++) {
        arrayElementRandom.push(Math.round(Math.random() * 550));
    }
    return arrayElementRandom;
}

console.log(randomArray(10));

// Part 9
// створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

function randomArray1(arrayLength, limit) {
    let arrayElementRandom = [];
    for (let i = 0; i < arrayLength; i++) {
        arrayElementRandom.push(Math.round(Math.random() * limit));
    }
    return arrayElementRandom;
}

console.log(randomArray1(15, 1500));

// Part 10
// Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

function arrayRevers(...arr4) {
    if (arr4.length === 0) {
        return `You call function without parameters`;
    }
    for (let arr4Element of arr4) {
        if (typeof arr4Element !== `number`) {
            return `Element ${arr4Element} in array = [${arr4}] is not a number`;
        }
    }

    let reversResult = [];

    for (let i = arr4.length - 1; i >= 0; i--) {
        reversResult.push(arr4[i]);
    }
    return reversResult;
}

console.log(arrayRevers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(arrayRevers([]));
console.log(arrayRevers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, `number`));


