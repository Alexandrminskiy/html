let checkBtn = document.querySelectorAll('[name="coffe"]');
let result = document.querySelector('.result');
let inputCount = document.querySelectorAll('.input-count');

let user = {
    firstName: "",
    secondName: "",
    amount: 0,
}

calcAmount = () => {
    let total = 0;
    checkBtn.forEach((e, i) => {
        if (e.checked) {
            total += +(e.dataset.price) * +(inputCount[i].value)
        }
    })
    return total
}

checkBtn.forEach((e, i) => {
    checkBtn[i].addEventListener('change', () => {
        if (checkBtn[i].checked) {
            inputCount[i].value = 1;
        }
        else {
            inputCount[i].value = 0;
        }
        user.amount = calcAmount();
        result.textContent = user.amount;
    })
})

for (let i = 0; i < inputCount.length; i++) {
    inputCount[i].addEventListener('change', () => {
        user.amount = calcAmount();
        result.textContent = user.amount;
    })
}

document.addEventListener("click", () => {
    user.amount = document.querySelector(".result").textContent;
})
