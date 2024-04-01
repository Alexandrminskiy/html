// let checkBtn = document.querySelectorAll('[name="coffe"]');
let result = document.querySelector('.result');
let select = [];
// let total = 0;

function updateTotal() {
    var checkboxes = document.querySelectorAll('[name="coffe"]');
    var total = 0;
    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            total += +(checkbox.value);
        }
    });
    document.querySelector('.result').textContent = total;
}

document.addEventListener('DOMContentLoaded', () => {
    var checkboxes = document.querySelectorAll('[name="coffe"]');
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', updateTotal);
    });
})