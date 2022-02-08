let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// Part 1
// Перебрати його циклом while

let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

// Part 2
// Перебрати його циклом for

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Part 3
// Перебрати його циклом while та вивести числа тільки з непарним індексом

let j = 1;
while (j < arr.length) {
    console.log(arr[j]);
    j += 2;
}

// Part 4
// Перебрати його циклом for та вивести числа тільки з непарним індексом

for (let j = 1; j < arr.length; j += 2) {
    console.log(arr[j]);
}

// Part 5
// Перебрати його циклом while та вивести числа тільки парні значення

let k = 0;
while (k < arr.length) {
    if (arr[k] % 2 === 0) (
        console.log(arr[k])
    );
    k++;
}

// Part 6
// Перебрати його циклом for та вивести числа тільки парні значення

for (let k = 0; k < arr.length; k++) {
    if (arr[k] % 2 === 0) (
        console.log(arr[k])
    );
}

// Part 7
// Замінити кожне число кратне 3 на слово okten

for (let l = 0; l < arr.length; l++) {
    if (arr[l] % 3 === 0) (
        console.log('okten')
    );
    else {
        console.log(arr[l]);
    }
}

// Part 8
// Вивести масив в зворотньому порядку
for (let m = arr.length - 1; m >= 0; m--) {
    console.log(arr[m]);
}

// Part 9
// Всі попередні завдання (окрім 8) але в зворотньому циклі

// (1)
let n = arr.length - 1;
while (n >= 0) {
    console.log(arr[n]);
    n--;
}

// (3)
let p = arr.length - 2;
while (p >= 0) {
    console.log(arr[p]);
    p -= 2;
}

// (4)
for (let t = arr.length - 2; t >= 0; t -= 2) {
    console.log(arr[t]);
}

// (5)
let r = arr.length - 1;
while (r >= 0) {
    if (arr[r] % 2 === 0) (
        console.log(arr[r])
    );
    r--;
}

// (6)
for (let s = arr.length - 1; s >= 0; s--) {
    if (arr[s] % 2 === 0) (
        console.log(arr[s])
    );
}

// (7)
for (let v = arr.length - 1; v >= 0; v--) {
    if (arr[v] % 3 === 0) (
        console.log('okten')
    )
    else (
        console.log(arr[v])
    )
}