const navBarMenu = document.querySelector('.navbar .links');
const showPopupBtn = document.querySelector('.login-btn');
const formPopupBtn = document.querySelector('.form-popup');
const hidePopupBtn = document.querySelector('.form-popup .close-btn');
const loginSignupLink = document.querySelectorAll('.form-box .bottom-link a');
const menuBtn = document.querySelector('.menu-btn');
const hideMenuBtn = navBarMenu.querySelector('.close-btn');

menuBtn.addEventListener('click', () => {
    navBarMenu.classList.toggle('show-menu');
});

hideMenuBtn.addEventListener('click', () => {
    menuBtn.click();
});

showPopupBtn.addEventListener('click', () => {
   document.body.classList.toggle('show-popup');
});

hidePopupBtn.addEventListener('click', () => {
    showPopupBtn.click();
 });

loginSignupLink.forEach(link => {   
    link.addEventListener('click', (e) => {
        e.preventDefault();
        formPopupBtn.classList[link.id === "signup-link" ? 'add' : 'remove']('show-signup');
    });
});

