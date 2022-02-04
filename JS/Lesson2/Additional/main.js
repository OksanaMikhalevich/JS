// Part 1
//  Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
//  кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//  Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.

let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
if (friends.length >= 3){
    console.log('Великий масив, в ньому 3 і більше елементів');
}
else {
    console.log('Маленький масив, в якому менше 3-ох елементів');
}

let friends1 = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"].length >= 3
    ? 'Великий масив, в ньому 3 і більше елементів'
    : 'Маленький масив, в якому менше 3-ох елементів';
console.log(friends1);

// Part 2
//  Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//  Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.

let array = [3,6,9];
let minValue = Math.min(...array);
let maxValue = Math.max(...array);

function findeMidleValue(value){
    if (value !== minValue && value !== maxValue){
        console.log('Midle number is ', value);
    }
}

findeMidleValue(array[0]);
findeMidleValue(array[1]);
findeMidleValue(array[2]);

// Part 3
// Перепишіть конструкцію if з використанням умовного оператора '?':
//  let result;
//  if (a + b < 4) {
//     result = 'Мало';
//  } else {
//     result = 'Багато';
//  }
let a = +(prompt('Введіть число'));
let b = +(prompt('Введіть число'));

let result = a + b < 4 ? 'Мало' : 'Багато';
console.log(result);

// Part 4
// Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором

let number = +(prompt('Введіть число'));

let text = number <= 100 && number > 0  ? 'Позитивне число'
         : number === 0                 ? 'Число є 0'
         : number >= -100 && number < 0 ? 'Негативне число'
         : 'Число вказано некоректно';
console.log(text);