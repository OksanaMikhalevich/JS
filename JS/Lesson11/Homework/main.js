// Part 1
// -створити форму з інпутами для name та age.
// При відправці форми записати об'єкт в localstorage

let form1      = document.forms.form1;

form1.onsubmit = function (e) {

    e.preventDefault();

    localStorage.setItem('user', JSON.stringify({

            username: e.target.username.value,
            age:      e.target.age.value

        }
    ));

    e.target.username.value = '';
    e.target.age.value = '';

}

// Part 2
// створити форму з інпутами для model,type та volume автівки.
// при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.


let array = []

let carInput = document.forms.form2.onsubmit = function (e) {

    e.preventDefault();

    array.push({

        model:  e.target.model.value,
        type:   e.target.type.value,
        volume: e.target.volume.value

    })

    localStorage.setItem('car', JSON.stringify(array));

        e.target.model.value  = '';
        e.target.type.value   = '';
        e.target.volume.value = '';
        
}