let form = document.querySelector('form')
let name = form.querySelector('div #name')
let email = form.querySelector('#email')
let password = form.querySelector('#password')

// console.log(name);
// console.log(email);
// console.log(password);

form.addEventListener('submit', formHandler)

function formHandler(e){
    e.preventDefault()
    // console.log(name.value);
    // console.log(email.value);
    // console.log(password.value);
    // console.log('Submit');

    let info = {
        name: name.value,
        email: name.value,
        password: name.value
    }

    console.log(info);

    name.value = '',
    email.value = '',
    password.value = ''
}