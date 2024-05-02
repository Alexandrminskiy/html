let tabsBtns = document.querySelectorAll('button');
let tabsItems = document.querySelectorAll('.tabs__item');

function hideTabs() {
    tabsItems.forEach(i => i.classList.add('hide'));
    tabsBtns.forEach(i => i.classList.remove('active'));
}

function showTabs(i) {
    tabsItems[i].classList.remove('hide');
    tabsBtns[i].classList.add('active');
}

hideTabs();
showTabs(0);

tabsBtns.forEach((btn, i) => btn.addEventListener('click', () => {
    hideTabs();
    showTabs(i);
}))

const anchors = document.querySelectorAll('.header__nav a');

anchors.forEach(anc => {
    anc.addEventListener(('click'), (e) => {
        e.preventDefault();
        const id = anc.getAttribute('href');
        const elem = document.querySelector(id);
        window.scroll({
            top: elem.offsetTop -80,
            behavior: "smooth"
        })
    })
})
