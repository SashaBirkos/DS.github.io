const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.header__menu-items');

menuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('menu--open');
});