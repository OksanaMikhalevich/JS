setTimeout(() =>{
    console.log(`Підйом`);
    setTimeout(() => {
        console.log(`Сніданок`);
        setTimeout(() => {
            console.log(`Тренування`);
            setTimeout(() => {
                console.log(`Навчання онлайн`);
                setTimeout(() => {
                    console.log(`Обід`);
                    setTimeout(() => {
                        console.log(`Виконання практичних робіт`);
                        setTimeout(() => {
                            console.log(`Вечеря`);
                            setTimeout(() => {
                                console.log(`Перегляд фільму`);
                                setTimeout(() => {
                                    console.log(`Сон`);
                                },9000)
                            },8000)
                        },7000)
                    },6000)
                },5000)
            },4000)
        },3000)
    },2000)
},1000)


function timeoutFunction (text1,text2,time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(text1);
            resolve(text2);
        },time)
    })
}
timeoutFunction(`Підйом`,`Сніданок`,1000)
.then(text => {
    return timeoutFunction(text,`Тренування`,2000);
})
.then(text => {
    return timeoutFunction(text,`Навчання онлайн`,3000);
})
.then(text => {
    return timeoutFunction(text,`Обід`,4000);
})
.then(text => {
    return timeoutFunction(text,`Виконання практичних робіт`,5000);
})
.then(text => {
    return timeoutFunction(text,`Вечеря`,6000);
})
.then(text => {
    return timeoutFunction(text,`Перегляд фільму`,7000);
})
.then(text => {
    return timeoutFunction(text,`Сон`,8000);
})
.then(text => {
    return timeoutFunction(text,'',9000);
})