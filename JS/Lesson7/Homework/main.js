// Part 1
// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User (id, name, surname , email, phone) {

    this['id']      = id;
    this['name']    = name;
    this['surname'] = surname;
    this['email']   = email;
    this['phone']   = phone;

}

let arrayUser = [

    new User(10,  'Vova',   'Milko', 'mv@gmail.com',    3801231212),
    new User(15,  'Vika',   'Milko', 'mvi.@gmail.com',  3802343434),
    new User(21,  'Olga',   'Milko', 'mol.@gmail.com',  3803454545),
    new User(5,   'Ira',    'Milko', 'mi.@gmail.com',   3804565656),
    new User(88,  'Oleg',   'Milko', 'mo.@gmail.com',   3805676767),
    new User(98,  'Stepan', 'Milko', 'ms.@gmail.com',   3806787878),
    new User(75,  'Taras',  'Milko', 'mtar.@gmail.com', 3807898989),
    new User(19,  'Illya',  'Milko', 'mil.@gmail.com',  3808909090),
    new User(102, 'Oksana', 'Milko', 'mok.@gmail.com',  3801321313),
    new User(154, 'Ostap',  'Milko', 'mos.@gmail.com',  3801331212),

]

console.log(arrayUser);

// Part 2
// Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filterArrayUser = arrayUser.filter(object => object.id % 2 === 0);

console.log(filterArrayUser);

// Part 3
// Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortArrayUser = arrayUser.sort((object1, object2) => object1.id - object2.id);

console.log(sortArrayUser);

// Part 4
// створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {

    constructor(id, name, surname, email, phone, order) {

        this.id      = id;
        this.name    = name;
        this.surname = surname;
        this.email   = email;
        this.phone   = phone;
        this.order   = order;

    }
}

let arrayClient = [

    new Client(10,  'Vova',   'Milko', 'mv@gmail.com',    3801231212, ['asd','fgt','ghj','ert','tik']),
    new Client(15,  'Vika',   'Milko', 'mvi.@gmail.com',  3802343434, ['asd','fgt','ghj']),
    new Client(21,  'Olga',   'Milko', 'mol.@gmail.com',  3803454545, ['asd','fgt','ghj','ert','cxd','yhf','wsd']),
    new Client(5,   'Ira',    'Milko', 'mi.@gmail.com',   3804565656, ['asd','fgt','ghj','ert','nhg','plj']),
    new Client(88,  'Oleg',   'Milko', 'mo.@gmail.com',   3805676767, ['asd','fgt','ghj','ert',]),
    new Client(98,  'Stepan', 'Milko', 'ms.@gmail.com',   3806787878, ['asd','fgt','ghj','ert','vip']),
    new Client(75,  'Taras',  'Milko', 'mtar.@gmail.com', 3807898989, ['asd','fgt','ghj','ert','mnb','dsa']),
    new Client(19,  'Illya',  'Milko', 'mil.@gmail.com',  3808909090, ['asd','fgt']),
    new Client(102, 'Oksana', 'Milko', 'mok.@gmail.com',  3801321313, ['asd']),
    new Client(154, 'Ostap',  'Milko', 'mos.@gmail.com',  3801331212, ['asd','fgt','ghj','ert',]),

]

console.log(arrayClient);

// Part 5
// Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortArrayClient = arrayClient.sort((object1,object2) => object1.order.length - object2.order.length);

console.log(sortArrayClient);