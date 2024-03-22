let res = document.querySelector('.res');
let btn = document.querySelectorAll('[name="contact"]');
let select = [];


btn.forEach(e => {
    e.addEventListener('change', () => {
        if (e.checked) {
            select.push(e.value);
            console.log(select);
        } else {
            select.splice(select.indexOf(e.value), 1)
            console.log(select);
            console.log(e.value);

        }

        if (select != 0) {

            res.textContent = select.join(', ');
        } else {
            res.textContent = 'yb xtuj'
        }
    })

});
