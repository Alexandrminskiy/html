const checkBoxObj = { email: false, phone: false, mail: false, }
let btn = document.querySelector('#btn');
let contact = document.querySelectorAll('[name="contact"]');

btn.addEventListener('click', ()=>{
    contact.forEach(element => {
        checkBoxObj[element.value]=element.checked;
    });
    console.log(checkBoxObj);
})