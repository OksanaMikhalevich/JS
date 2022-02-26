// Part 1
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car (model, carManufacturer,changeYear, maxSpeed, engineCapacity){

    this['model']            = model;
    this['carManufacturer']  = carManufacturer;
    this['changeYear']       = changeYear;
    this['maxSpeed']         = maxSpeed;
    this['engineCapacity']   = engineCapacity;

    this['drive']            = function (){

        console.log(`Їдемо зі швидкістю ${maxSpeed} км на годину`);

    }

    this['info']             = function () {

        for (let element in this) {
            if (typeof this[element] !== 'function') {
                console.log(`${element} - ${this[element]}`);
            }
        }
    }

    this['increaseMaxSpeed'] = function (newSpeed){

        console.log(this.maxSpeed = this.maxSpeed + newSpeed);

    }

    this['changeYearNew']    = function (newValue){

        console.log(this.changeYear = newValue);

    }

    this['addDriver']        = function (driver) {

        this['driver'] = driver;

    }
}

let car = new Car('Bugatti', 'France', 2021, 300, 3.0);

console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(70);
car.changeYearNew(2020);
car.addDriver('Oksana');

// Part 2
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car1 {

    constructor(model, carManufacturer, changeYear, maxSpeed, engineCapacity) {

        this.model           = model;
        this.carManufacturer = carManufacturer;
        this.changeYear      = changeYear;
        this.maxSpeed        = maxSpeed;
        this.engineCapacity  = engineCapacity;

    }

    drive() {

        console.log(`Їдемо зі швидкістю ${this.maxSpeed} км на годину`);

    }

    info() {

        for (let element in this) {
            if (typeof this[element] !== 'function') {
                console.log(`${element} - ${this[element]}`);

            }
        }
    }

    increaseMaxSpeed (newSpeed){

        console.log(this.maxSpeed = this.maxSpeed + newSpeed);

    }

    changeYearNew (newValue){

        console.log(this.changeYear = newValue);

    }

    addDriver (driver) {

        this['driver'] = driver;

    }
}

let car1 = new Car1('Audi', 'Germany', 2021, 250, 2.5);

console.log(car1);
car1.drive();
car1.info();
car1.increaseMaxSpeed(70);
car1.changeYearNew(2020);
car1.addDriver('Oksana');

// Part 3
// створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class People{

    constructor(name, age) {
        this.name = name;
        this.age  = age;
    }
}

class Cinderella extends People{

    constructor(name, age, footSize) {
        super(name, age);
        this.footSize = footSize;
    }

    getFootSize(){
        return this.footSize;
}
}

class Prince extends People{

    constructor(name, age, shoeSize) {
        super(name, age);
        this.shoeSize = shoeSize;
    }

    getShoeSize(){
        return this.shoeSize;
    }

    findCinderella(arrayCinderella){
        for (let element of arrayCinderella) {
            if (element.getFootSize() === this.getShoeSize()){
                return element;
            }
        }
    }
}

let arrayCinderella = [
    new Cinderella('Megan',   17,37),
    new Cinderella('Jennifer',19,35.5),
    new Cinderella('Camilla', 20,36),
    new Cinderella('Suzanne', 21,35),
    new Cinderella('Bella',   22,36.5),
    new Cinderella('Selena',  23,37.5),
    new Cinderella('Amanda',  24,38),
    new Cinderella('Helli',   21,38.5),
    new Cinderella('Kate',    20,39),
    new Cinderella('Penelope',18,39.5),
]

console.log(arrayCinderella);

let prince = new Prince('Reno',35,37);
console.log(prince);

console.log(prince.findCinderella(arrayCinderella));
