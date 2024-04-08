let checkBtn = document.querySelectorAll('[name="coffe"]');
let result = document.querySelector('.result');
let inputCount = document.querySelectorAll('.input-value');
// let inputCount = document.querySelectorAll('.count');

let user = {
    firstName: "",
    secondName: "",
    amount: 0,
}


function calcAmount() {
    let total = 0;
    for (let j = 0; j < checkBtn.length; j++) {
        if (checkBtn[j].checked) {
            total += +(checkBtn[j].dataset.price) * +(inputCount[j].value)
            // console.log(checkBtn[j].dataset.price);
            // console.log(inputCount[j].value);
        }
    }
    return total
}

for (let i = 0; i < checkBtn.length; i++) {
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
}
for (let i = 0; i < inputCount.length; i++) {
    inputCount[i].addEventListener('change', () => {
        user.amount = calcAmount();
        result.textContent = user.amount;
    })
}

document.addEventListener("click", () => {
    user.amount = document.querySelector(".result").textContent;
})

// document.addEventListener('change', () => {
//     let total = 0;
//     for (const e of checkBtn) {
//         if (e.checked) {
//             total += +(e.value);
//             calcAmount()
//         }
//     }
//     result.textContent = total
// });

