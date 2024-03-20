let nameQ = document.querySelector('[name="names"]');
let famyli = document.querySelector('.family-input');
let btn = document.querySelector('.form-button');
let res = document.querySelector('.res')

btn.addEventListener('click', () => {
    res.textContent = (` ${famyli.value}  ${nameQ.value}`);
})

