let scrollLineWidth = window.innerWidth - document.documentElement.clientWidth;

function menu(btn, btnClass) {
    btn.onclick = () => {
            btn.classList.toggle(btnClass);
            document.body.classList.toggle(btn.dataset.bodyClass);
            document.querySelector('.mobile__top').style.right = (btn.classList.contains(btnClass)) ? 
            scrollLineWidth + 'px'
            : ''; 
    }
};