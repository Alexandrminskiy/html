let btn = document.querySelector('.btn');
let result = document.querySelector('.result');
let checks = document.querySelectorAll('[name="contact"]');

btn.addEventListener('click', () => {
    let select = [];
    for (const checkBtn of checks) {
        if (checkBtn.checked) {
            select.push(checkBtn.value)
        }
    }
    if (select != 0) {
        result.textContent = select.join(', ');
    } else {
        result.textContent = 'ни чешго не выбрано';
    }
})