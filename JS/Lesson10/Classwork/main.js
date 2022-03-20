// Part 1
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let form1  = document.createElement('form');
let form2  = document.createElement('form');
let input1 = document.createElement('input');
let input2 = document.createElement('input');
let input3 = document.createElement('input');
let input4 = document.createElement('input');
let button1 = document.createElement('button');

form1.setAttribute('name','form1');
form2.setAttribute('name','form2');
input1.setAttribute('name','input1');
input2.setAttribute('name','input2');
input3.setAttribute('name','input3');
input4.setAttribute('name','input4');
input1.setAttribute('placeholder','Enter you name');
input2.setAttribute('placeholder','Enter you surname');
input3.setAttribute('placeholder','Enter you gender');
input4.setAttribute('placeholder','Enter you practice');
button1.innerText = 'Click me'

form1.append(input1,input2);
form2.append(input3,input4);
document.body.append(form1,form2,button1);

button1.addEventListener('click', function (){

    console.log(document.forms.form1.input1.value);
    console.log(document.forms.form1.input2.value);
    console.log(document.forms.form2.input3.value);
    console.log(document.forms.form2.input4.value);

})

// Part 2
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let divOne = document.createElement('div');
let inputOne = document.createElement('input');
let inputTwo = document.createElement('input');
let inputThree = document.createElement('input');
let buttonOne = document.createElement('button');

inputOne.setAttribute('placeholder', 'Кількість рядків');
inputTwo.setAttribute('placeholder', 'Кількість стовпців');
inputThree.setAttribute('placeholder', 'Вміст ячеєк');
buttonOne.innerText = 'Сформувати таблицю';

divOne.append(inputOne,inputTwo,inputThree, buttonOne);
document.body.appendChild(divOne);

buttonOne.onclick = function (){
    let tr = inputOne.value;
    let td = inputTwo.value;
    let text = inputThree.value;

    function createOfTable (tr,td,text){
        let table = document.createElement('table');
        table.style.border = '3px solid black';

        for(let i = 0; i<tr; i++ ){
            let tr = document.createElement('tr');

            for(let j = 0; j<td; j++){
                let td = document.createElement('td');
                td.style.border='2px solid silver';
                td.innerText = `${text}`;

                tr.appendChild(td);
                table.appendChild(tr);
                document.body.appendChild(table);
            }
        }

    }
    createOfTable(tr,td,text);
}
// Part 3
// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

let array = ['duck', 'qwer', 'asdf','zxcv'];

let inputElement = document.createElement('input');
inputElement.setAttribute('type','text');
inputElement.setAttribute('placeholder','Введіть слово');

let buttonClick = document.createElement('button');
buttonClick.innerText = 'Здійсніть перевірку';

document.body.append(inputElement,buttonClick);

buttonClick.onclick = function (){

for (let item of array) {
let inputValue = inputElement.value;

if(inputValue.toLowerCase().includes(item)){
    alert('Сам такий');
    inputElement.value = '';
}
else {
    alert('Чемна людина');
    inputElement.value = '';
}
}
}

// Part 4
// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку

// Код з завдання 3