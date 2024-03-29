let btn = document.querySelector('#btn');
let radioElement = document.querySelectorAll('[name="goods"]');

const choiseGood = { value: "", price: 0, size: "", };

btn.addEventListener('click', () => {
    radioElement.forEach(e => {
        if (e.checked) {
            choiseGood.value = e.value;
            choiseGood.price = +(e.dataset.price);
            choiseGood.size = e.dataset.size;
        }
    })
    console.log(choiseGood);
})