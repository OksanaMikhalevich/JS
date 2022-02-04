// Part 1
//  Користувач вводить або має два числа. Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let number1 = +(prompt('Введіть перше число'));
let number2 = +(prompt('Введіть друге число'));

if (number1 > number2){
    console.log(number1);
}
else if (number1 === number2){
    console.log('Числа є рівними');
}
else if (number1 < number2){
    console.log(number2);
}

let num = number1 > number2 ? number1
    : number1 === number2 ? 'Числа рівні'
    : number1 < number2 ? number2
    : 'incorrect data'
console.log(num);

// Part 2
// У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
// Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

let apartmentNumber = +(prompt('Apartment number'));

if (apartmentNumber <= 20){
    console.log('The apartment is in the first entrance');
}
else if (apartmentNumber > 20 && apartmentNumber <= 48){
    console.log('The apartment is located in the second entrance');
}
else if (apartmentNumber > 48 && apartmentNumber <= 90){
    console.log('The apartment is located on the third entrance');
}


let apartmentNumber1 = +(prompt('Apartment number'));

let text = apartmentNumber1 <= 20                          ? 'The apartment is in the first entrance'
         : apartmentNumber1 > 20 && apartmentNumber1 <= 48 ?  'The apartment is located in the second entrance'
         : apartmentNumber1 >48 && apartmentNumber1 <=90   ? 'The apartment is located on the third entrance'
         : 'incorrect data';
console.log(text);

// Part 3
// Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО,
// якщо змінна не рівна 10 - тоді НЕВІРНО

let number = +(prompt('Введіть число'));
let txt = number === 10 ? 'ВІРНО' : 'НЕВІРНО';
console.log(txt);

// Part 4
// Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
// якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else

function verifyType(x){
     typeof x === 'number'                           ? console.log('1')
   : typeof x === 'string'                           ? console.log('2')
   : typeof x === 'object' || typeof x === 'boolean' ? console.log('3')
   : console.log('incorrect data')
}
verifyType(1);
verifyType(`test`);
verifyType(true);
verifyType([1,2,3]);
verifyType({a : 1});



// Part 5
// Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
// Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
// Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

let temperature = +(prompt('чи ми йдемо сьогодні в OKTEN на навчання?'));
if (temperature >= 10 && temperature <= 22){
    console.log('Ми йдемо вчитися');
}
else {
    console.log('Ми не йдемо вчитися');
}

let temperature1 = temperature >=10 && temperature <= 22 ? 'Ми йдемо на практику' : 'Ми не йдемо на практику';
console.log(temperature1);

// Part 6
// За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
// числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ...

let xxx = prompt('Вікторина. Введіть число');
switch (xxx){
    case '1':
        console.log('Автомобіль');
        break;
    case '2':
        console.log('Мотоцикл');
        break;
    case '3':
        console.log('Телефон');
        break;
    case '4':
        console.log('Мультиварка');
        break;
    case '5':
        console.log('Пароварка');
        break;
}



