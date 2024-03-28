const user = { name: '', surname: '' };
let btn = document.querySelector('#btn');
let inputName = document.querySelector('#name');
let inputSurname = document.querySelector('#surname');

btn.addEventListener('click', () => {
    user.name = inputName.value;
    user.surname = inputSurname.value;
    console.log(user);
})