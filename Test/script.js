<<<<<<< HEAD
let nameQ = document.querySelector('[name="names"]');
let famyli = document.querySelector('.family-input');
let btn = document.querySelector('.form-button');
let res = document.querySelector('.res')

btn.addEventListener('click', () => {
    res.textContent = (` ${famyli.value}  ${nameQ.value}`);
})

=======
let btn = document.querySelector('.btn');
let res = document.querySelector('.res');
>>>>>>> ba1f27849e47db7c74ab78bce5777f0669841269
