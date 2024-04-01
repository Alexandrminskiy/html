btn = document.querySelectorAll('[name="contact"]');
result = document.querySelector('.result');
let select = [];

btn.forEach(e => {
    e.addEventListener('change', () => {
        if (e.checked) {
            select.push(e.value);
        } else {
            select.splice(select.indexOf(e.value), 1)
        }
        if (select.length != 0) {
            result.textContent = select.join(', ');
        } else {
            result.textContent = 'Ни чего не выбрано'
        }
    })
})
