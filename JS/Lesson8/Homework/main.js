// Напишіть код,  котрий :

// Part 1
// отримує текст з параграфа з id "content"

let contentByID = document.getElementById('content');

console.log(contentByID);

// Part 2
// отримує текст з блоку з id "rules"

let rulesById = document.getElementById('rules');

console.log(rulesById);

// Part 3
// замініть текст параграфа з id 'content' на будь-який інший

contentByID.innerText = 'Hello World';

contentByID.innerHTML = '<strong>Hello World</strong>';


// Part 4
// замініть текст параграфа з id 'rules' на будь-який інший

rulesById.innerText = 'Hello World';

rulesById.innerHTML = '<i>Hello World</i>';

// Part 5
// змініть кожному елементу колір фону на червоний

let bodyChildren = document.body.children;

for (const bodyChild of bodyChildren) {

    bodyChild.style.background = 'red';

}

// Part 6
// змініть кожному елементу колір тексту на синій

for (const bodyChild of bodyChildren) {

    bodyChild.style.color = 'blue';

}

// Part 7
// отримати весь список класів елемента з id=rules і вивести їх в console.log

console.log(rulesById.classList);

// Part 8
// поміняти колір тексту у всіх елементів fc_rules на червоний

let fcRulesClass = document.getElementsByClassName('fc_rules');

for (const fcRulesClassElement of fcRulesClass) {

    fcRulesClassElement.style.color = 'red';

}


