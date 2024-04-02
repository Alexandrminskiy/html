let checkBtn = document.querySelectorAll('[name="coffe"]');
let result = document.querySelector('.result');
let count = document.querySelector('.input-value')

document.addEventListener('change', () => {
    let total = 0;
    for (const checkbox of checkBtn) {
        if (checkbox.checked) {
            total += +(checkbox.value);
        }
    }
    result.textContent = total
    count.textContent=total.value
});