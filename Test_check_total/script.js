let btn = document.querySelector('.btn');
let res = document.querySelector('.result');
let checkes = document.querySelectorAll('[name="food"]');



btn.addEventListener('click', () => {
    let total = 0;
    for (const checkBtn of checkes) {
        if (checkBtn.checked) {
            total += +(checkBtn.value);
        }
    }
    if (total != 0) {
        res.textContent = total;
    }
    else {
        res.textContent = 'Вы не чего не выбрали';
    }
})