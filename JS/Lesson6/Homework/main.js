// Part 1
// Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'

let lengthString = `hello world`;
console.log(lengthString.length);
console.log(lengthString.indexOf(`d`) + 1);

let lengthString1 = `lorem ipsum`;
console.log(lengthString1.length);
console.log(lengthString1.lastIndexOf('m') + 1);

let lengthString2 = `javascript is cool`;
console.log(lengthString2.length);
console.log(lengthString2.indexOf(`l`) + 1);

// Part 2
//  Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'

let upperCase = `hello world`;
console.log(upperCase.toUpperCase());

let upperCase1 = `lorem ipsum`;
console.log(upperCase1.toUpperCase());

let upperCase2 = `javascript is cool`;
console.log(upperCase2.toUpperCase());

// Part 3
//  Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

lowerCase = upperCase;
console.log(lowerCase.toLowerCase());

lowerCase1 = upperCase1;
console.log(lowerCase1.toLowerCase());

lowerCase2 = upperCase2;
console.log(lowerCase2.toLowerCase());

// Part 4
// Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
console.log(str.replaceAll(' ', ''));
console.log(str.substring(1, 13));
console.log(str.trim());

// Part 5
// Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.

let stringToArray = (str) => {
    console.log(str.split(' '));
};

stringToArray(`Каждый охотник желает знать`);
stringToArray(`Happy Valentine Day`);

// Part 6
// Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.

let delete_characters = (str, index) => {
    let substring = str.substring(0, index);
    console.log(substring);
}
delete_characters(`Каждый охотник желает знать`, 5);

// Part 7
//  Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
//    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let insert_dash = (string) => {
    let toUpperCaseReplace = string
        .toUpperCase()
        .replaceAll(' ', '-');
    console.log(toUpperCaseReplace);
}
insert_dash(`HTML JavaScript PHP`);

// Part 8
// Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

let string = (str) => {
    console.log(str[0].toUpperCase() + str.slice(1));
}
string(`каждый охотник желает знать`)

// Part 9
// Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.



