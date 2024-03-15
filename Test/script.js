let btn = document.querySelector('.btn');
let firstN = document.querySelector('[name="firstN"]');
let secondN = document.querySelector('[name="secondN"]');
let res = document.querySelector('.res');

btn.addEventListener('click', ()=>{
    res.textContent = +firstN.value + +secondN.value;
})