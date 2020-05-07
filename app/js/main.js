// mobile-menu
let menuBtn = document.querySelector('.mobile-btn');
menu(menuBtn, 'mobile-btn_active');


// fix submenu over page's edges
document.querySelector('.header__menu').addEventListener('mouseover', submenu);
document.querySelector('.header__menu').addEventListener('mouseout', submenu);


// dropdown menu
document.addEventListener('click', dropdown);


// slider =================================
new Slider(slider, {time: 2});