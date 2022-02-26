// Part 1
//  Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//         }
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
//     }
// }

class Info {
    constructor(id, name, username, email,
                street, suite, city, zipcode, lat, lng,
                phone, website,
                companyName, catchPhrase, bs) {

        this.id        = id;
        this.name      = name;
        this.username  = username;
        this.email     = email;
        this.address   = {
            street     : street,
            suite      : suite,
            city       : city,
            zipcode    : zipcode,
            geo: {
                lat    : lat,
                lng    : lng
            }
        }
        this.phone     = phone;
        this.website   = website;
        this.company   = {
            name       : companyName,
            catchPhrase: catchPhrase,
            bs         : bs,
        }
    }

    getInfo() {
        return {
            id      : this.id,
            name    : this.name,
            username: this.username,
            email   : this.email,
            address : this.address,
            phone   : this.phone,
            website : this.website,
            company : this.company,
        }
    }
}

let info = new Info(1, 'Leana Graham', 'Bret', 'Sincere@april.biz',
    'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', '-37.3159', '81.1496',
    '1-770-736-8031 x56442', 'hildegard.org', 'Romaguera-Crona', 'Multi-layered client-server neural-net',
    'harness real-time e-markets');

console.log(info);

console.log(info.getInfo());

// Part 2
// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//  -назва тегу ()
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
//
//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select

class Tag {
    constructor(titleOfTag, action, array) {

        this.titleOfTag = titleOfTag;
        this.action     = action;
        this.attrs      = array;

    }
}

let tag1 = new Tag('a', 'предназначен для создания ссылок',
    [

        {titleOfAttrs: 'href', actionOfAttrs: 'Задает адрес документа, на который следует перейти'},
        {titleOfAttrs: 'target', actionOfAttrs: 'Имя окна или фрейма, куда браузер будет загружать документ'},

    ]);

console.log(tag1);

let tag2 = new Tag('div', 'предназначен для выделения фрагмента документа с целью изменения вида содержимого',
    [

        {titleOfAttrs: 'align', actionOfAttrs: 'Задает выравнивание содержимого тега div'},
        {titleOfAttrs: 'title', actionOfAttrs: 'Добавляет всплывающую подсказку к содержимому'},

    ]);

console.log(tag2);

let tag3 = new Tag('h1', 'заголовок первого уровня',
    [

        {titleOfAttrs: 'align', actionOfAttrs: 'Определяет выравнивание заголовка'},

    ]);

console.log(tag3);

let tag4 = new Tag('span', 'предназначен для определения строчных элементов документа',
    [

        {
            titleOfAttrs: 'accesskey',
            actionOfAttrs: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш'
        },
        {titleOfAttrs: 'hidden', actionOfAttrs: 'Скрывает содержимое элемента от просмотра'},

    ]);

console.log(tag4);

let tag5 = new Tag('input', ' является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса ' +
    'и обеспечить взаимодействие с пользователем',
    [

        {titleOfAttrs: 'autocomplete', actionOfAttrs: 'Включает или отключает автозаполнение'},
        {
            titleOfAttrs: 'accept',
            actionOfAttrs: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов'
        },

    ]);

console.log(tag5);

let tag6 = new Tag('form', ' устанавливает форму на веб-странице, форма предназначена для обмена данными между пользователем и сервером',
    [

        {titleOfAttrs: 'enctype', actionOfAttrs: 'Способ кодирования данных формы'},
        {
            titleOfAttrs: 'accept-charset',
            actionOfAttrs: 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные'
        },

    ]);

console.log(tag6);

let tag7 = new Tag('option', ' определяет отдельные пункты списка, создаваемого с помощью контейнера select',
    [

        {titleOfAttrs: 'label', actionOfAttrs: 'Указание метки пункта списка'},
        {titleOfAttrs: 'disabled', actionOfAttrs: 'Заблокировать для доступа элемент списка'},

    ]);

console.log(tag7);

let tag8 = new Tag('select', '  позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним ' +
    'или множественным выбором',
    [

        {titleOfAttrs: 'form', actionOfAttrs: 'Связывает список с формой'},
        {titleOfAttrs: 'multiple', actionOfAttrs: 'Позволяет одновременно выбирать сразу несколько элементов списка'},

    ]);

console.log(tag8);

