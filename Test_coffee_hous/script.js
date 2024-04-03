let checkBtn = document.querySelectorAll('[name="coffee"]');
let result = document.querySelector('.result');
let count = document.querySelectorAll('.input-value');
// let counter = document.querySelectorAll('[name="qwe"]')

let user = {
	firstName: "",
	secondName: "",
	amount: 0,
}


function calcAmount (){
    let total = 0;
    for(let j = 0; j < checkBtn.length;j++){
        if(checkBtn[j].checked){
            total += +(checkBtn[j].dataset.price)* +(count[j].value)
            console.log(checkBtn[j].dataset.price);
            console.log(count[j].value);
        }
    }
    return total
}






document.addEventListener('change', () => {
    let total = 0;
    for (const e of checkBtn) {
        if (e.checked) {
            total += +(e.value);
           calcAmount ()
        }
    } 
    result.textContent = total
});

