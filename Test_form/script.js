let btn = document.querySelector('.btn');
let firstN = document.querySelector('.inp');
let secondN = document.querySelector('.inp2');
let res = document.querySelector('.res');

btn.addEventListener('click', ()=>{
    res.textContent = firstN.value + secondN.value;
})